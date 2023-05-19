const mongoose = require('mongoose');

//Definir esquema de anuncio
const anuncioSchema = mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    tipo: { type: String, required: true },
    precio: { type: Number, required: true },
    foto: { type: String },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }]
});

//Crear modelo de anuncio
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

//Exportar el modelo
module.exports = Anuncio;



