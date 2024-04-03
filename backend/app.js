const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Start express app
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Development logging
app.use(morgan('dev'));

app.use(bodyParser.json());

module.exports = app;