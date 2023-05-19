const mongoose = require('mongoose');
const { dbUrl } = require('../config');

mongoose.set('strictQuery', false);

mongoose.connection.on('error', err => {
    console.log('error de conexion', err);
});

mongoose.connection.once('open', () => {
    console.log('conectado a MongoDB en', mongoose.connection.name);
});

mongoose.connect(dbUrl);

module.exports = mongoose.connection;