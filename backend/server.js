const mongoose = require('mongoose');
const dotenv = require('dotenv');
const http = require('http');

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB)
    .then(() => console.log('DB connection successful!'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const port = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`App running on port ${port}...`);
});