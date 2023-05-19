var express = require('express');
var router = express.Router();
var Anuncio = require('../models/Anuncio');

router.put('/:id', async (req, res, next) => {
    try {

        const id = req.params.id;
        const data = req.body;

        const anuncioActualizado = await Anuncio.findByIdAndUpdate(id, data, {
            new: true 
        });

        res.json({ result: anuncioActualizado });

    } catch (error) {
        res.status(400).json({ error: 'Falta algún parámetro"'});
    }
});



module.exports = router;