const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');


const multerStorage = multer.memoryStorage();

const upload = multer({
    storage: multerStorage
});

exports.uploadWorkImages = upload.fields([
    { name: 'imageCover', maxCount: 1 },
    { name: 'sliderImages', maxCount: 3 }
]);

exports.resizeWorksImages = async (req, res, next) => {

    const imagesFolder = './images';

    if (!fs.existsSync(imagesFolder)) {
        fs.mkdirSync(imagesFolder);
    };

    if (!req.files) return next();

    const coverName = `work-${Date.now()}-cover.png`;

    req.body.imageCover = `${req.protocol}://${req.get('host')}/images/${coverName}`;
    // console.log(req.files.imageCover[0])
    await sharp(req.files.imageCover[0].buffer)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`${imagesFolder}/${coverName}`);

    req.body.sliderImages = [];
    // console.log(req.files.sliderImages)
    await Promise.all(
        req.files.sliderImages.map(async (file, i) => {
            const filename = `work-${Date.now()}-${i + 1}.png`;

            await sharp(file.buffer)
                .toFormat('png')
                .png({ quality: 90 })
                .toFile(`${imagesFolder}/${filename}`);

            req.body.sliderImages.push(`${req.protocol}://${req.get('host')}/images/${filename}`);
        })
    );

    next();
};