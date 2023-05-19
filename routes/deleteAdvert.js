var express = require('express');
var router = express.Router();
var Anuncio = require('../models/Anuncio');

router.delete('/:id', async (req, res, next) => {
    try {
  
      const id = req.params.id;
  
      await Anuncio.deleteOne({ _id: id });
  
      res.json();
  
    } catch (error) {
        res.status(404).json({ error: 'El id requerido no existe'});
    }
  });
  


module.exports = router;
