var express = require('express');
var router = express.Router();
const getAdvertsRouter = require('./getAdverts');
const createAdvertRouter = require('./createAdvert');
const getAdvertByIdRouter = require('./getAdvertById');
const updateAdvertRouter = require('./updateAdvert');
const deleteAdvertRouter = require('./deleteAdvert');
const getTagsRouter = require('./getTags');
const getHomePage = require('./getHomePage');


const Anuncio = require('../models/Anuncio');
const Tag = require('../models/Tag');

/* API methods */
router.use('/getadverts', getAdvertsRouter);
router.use('/createadvert', createAdvertRouter);
router.use('/getAdvertById', getAdvertByIdRouter);
router.use('/updateAdvert', updateAdvertRouter);
router.use('/deleteAdvert', deleteAdvertRouter);
router.use('/getTags', getTagsRouter);

router.use('/', getHomePage);


module.exports = router;