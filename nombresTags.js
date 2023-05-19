const mongoose = require('mongoose');
const Tag = require('./models/Tag'); 

mongoose.connect('mongodb://localhost:27017/nodepop', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Crear los tags
const tags = [
    { nombre: 'motor' },
    { nombre: 'lifestyle' },
    { nombre: 'work' },
    { nombre: 'mobile' }
  ];
  
  // Insertar los tags en la base de datos
  Tag.insertMany(tags)
    .then(() => console.log('Tags creados con éxito'))
    .catch(error => console.log(error));