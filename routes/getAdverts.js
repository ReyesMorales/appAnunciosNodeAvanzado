var express = require('express');
var router = express.Router();
var Anuncio = require('../models/Anuncio');
var Tag = require('../models/Tag');


router.get('/', async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const skip = parseInt(req.query.skip) || 0;

        const filtros = {};
        if (req.query.tags) {
            filtros.tags = { $in: await Tag.find({ nombre: { $in: req.query.tags.split(',') } }).select('_id') };
        }
        if (req.query.tipo) {
            filtros.tipo = req.query.tipo;
        }
        if (req.query.precio_min) {
            filtros.precio = { $gte: req.query.precio_min };
        }
        if (req.query.precio_max) {
            filtros.precio = { ...filtros.precio, $lte: req.query.precio_max };
        }
        if (req.query.titulo) {
            filtros.titulo = { $regex: req.query.titulo, $options: 'i' };
        }

        const anuncios = await Anuncio.find(filtros)
      .populate('tags', 'nombre') 
      .skip(skip)
      .limit(limit);

        res.json(anuncios);

        
    } catch (error) {
        next(error)
    }
});


module.exports = router;

