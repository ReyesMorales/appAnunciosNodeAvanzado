const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

mongoose.connection.on('error', err => {
    console.log('error de conexion', err);
});

mongoose.connection.once('open', () => {
    console.log('conectado a MongoDB en', mongoose.connection.name);
});

mongoose.connect(process.env.MONGODB_CONNECTION_STR);

module.exports = mongoose.connection;