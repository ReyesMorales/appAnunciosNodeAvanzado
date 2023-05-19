const mongoose = require('mongoose');
const Anuncio = require('../models/Anuncio');
const Tag = require('../models/Tag');
const anunciosJson = require('../anuncios.json');
const { dbUrl } = require('../config');

const cargarDatos = async (modelo, datos) => {
  try {
    await modelo.deleteMany({});
    await modelo.insertMany(datos);
    console.log(`${modelo.modelName} creados con éxito`);
  } catch (error) {
    console.log(`Error al cargar datos en ${modelo.modelName}: ${error}`);
  }
};

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Conexión a la base de datos establecida');

    await cargarDatos(Tag, [
      { nombre: 'motor' },
      { nombre: 'lifestyle' },
      { nombre: 'work' },
      { nombre: 'mobile' }
    ]);

    const anunciosConTags = anunciosJson.map(async anuncio => {
      const tagIds = await Tag.find({ nombre: { $in: anuncio.tags } }).distinct('_id');
      return { ...anuncio, tags: tagIds };
    });

    await Promise.all(anunciosConTags).then(async results => {
      await cargarDatos(Anuncio, results);
    });

    console.log('Datos iniciales cargados con éxito');

    mongoose.connection.close();
  })
  .catch(error => console.log(`Error al conectar con la base de datos: ${error}`));
