const express = require('express');
const router = express.Router();

const worksCtrl = require('../controllers/work');

router
    .route('/')
    .get(worksCtrl.getAllWorks)
    .post(worksCtrl.createWork);

module.exports = router;
