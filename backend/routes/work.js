const express = require('express');
const router = express.Router();

const worksCtrl = require('../controllers/work');

router
    .route('/')
    .get(worksCtrl.getAllWorks)
    .post(worksCtrl.createWork);

router
    .route('/:id')
    .get(worksCtrl.getOneWork)
    .delete(worksCtrl.deleteWork);

module.exports = router;
