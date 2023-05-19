var express = require('express');
var router = express.Router();
var Tag = require('../models/Tag');

router.get('/', async (req, res, next) => {
  try {
    const tags = await Tag.find({});
    res.json(tags);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
