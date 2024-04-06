const express = require('express');
const router = express.Router();

const worksCtrl = require('../controllers/work');

const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');

router
    .route('/')
    .get(worksCtrl.getAllWorks)
    .post(
        auth,
        multer.uploadWorkImages,
        multer.resizeWorksImages,
        worksCtrl.createWork
    );

router
    .route('/:id')
    .get(worksCtrl.getOneWork)
    .patch(
        auth,
        multer.uploadWorkImages,
        multer.resizeWorksImages,
        worksCtrl.modifyWork
    )
    .delete(
        auth,
        worksCtrl.deleteWork
    );

module.exports = router;
