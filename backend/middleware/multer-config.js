const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');


const multerStorage = multer.memoryStorage();

const upload = multer({
    storage: multerStorage
});

exports.uploadWorkImages = upload.array('sliderImages', 5);

exports.resizeWorksImages = async (req, res, next) => {

    const imagesFolder = './images';

    if (!fs.existsSync(imagesFolder)) {
        fs.mkdirSync(imagesFolder);
    };

    if (!req.files) return next();

    req.body.sliderImages = [];

    await Promise.all(
        req.files.map(async (file, i) => {
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