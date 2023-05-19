var express = require('express');
var router = express.Router();
var Anuncio = require('../models/Anuncio');

router.post('/', async (req, res, next) => {
    try {

        const anuncioData = req.body;

        // creamos una instancia de Agente en memoria
        const anuncio = new Anuncio(anuncioData);

        // la persistimos en la BD
        const anuncioGuardado = await anuncio.save();

        res.json({ result: anuncioGuardado });

    } catch (error) {
        res.status(400).json({ error: 'Falta algún parámetro"'});
    }
});

module.exports = router;
