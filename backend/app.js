const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const worksRoutes = require('./routes/work');
const userRoutes = require('./routes/user');

// Start express app
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

// Development logging
app.use(morgan('dev'));

app.use('/images', express.static('./images'));
app.use('/api/v1/works', worksRoutes);
app.use('/api/v1/auth', userRoutes);

module.exports = app;