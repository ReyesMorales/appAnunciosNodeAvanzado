const mongoose = require('mongoose');

//Definir esquema de anuncio
const tagSchema = mongoose.Schema({
    nombre: { type: String, required: true },
});

//Crear modelo de anuncio
const Tag = mongoose.model('Tag', tagSchema);

//Exportar el modelo
module.exports = Tag;