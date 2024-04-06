const express = require('express');
const router = express.Router();

const worksCtrl = require('../controllers/work');

const multer = require('../middleware/multer-config');

router
    .route('/')
    .get(worksCtrl.getAllWorks)
    .post(
        multer.uploadWorkImages,
        multer.resizeWorksImages,
        worksCtrl.createWork
    );

router
    .route('/:id')
    .get(worksCtrl.getOneWork)
    .patch(
        multer.uploadWorkImages,
        multer.resizeWorksImages,
        worksCtrl.modifyWork
    )
    .delete(worksCtrl.deleteWork);

module.exports = router;
