var express = require('express');
var router = express.Router();
const getAdvertsRouter = require('./getAdverts');
const createAdvertRouter = require('./createAdvert');
const getAdvertByIdRouter = require('./getAdvertById');
const updateAdvertRouter = require('./updateAdvert');
const deleteAdvertRouter = require('./deleteAdvert');
const getTagsRouter = require('./getTags');
const getHomePage = require('./getHomePage');
const jwtAuthMiddleware = require('../lib/jwtAuthMiddleware');


const Anuncio = require('../models/Anuncio');
const Tag = require('../models/Tag');

/* API methods */
router.use('/getadverts', jwtAuthMiddleware, getAdvertsRouter);
router.use('/createadvert', jwtAuthMiddleware, createAdvertRouter);
router.use('/getAdvertById', jwtAuthMiddleware, getAdvertByIdRouter);
router.use('/updateAdvert', jwtAuthMiddleware, updateAdvertRouter);
router.use('/deleteAdvert', jwtAuthMiddleware, deleteAdvertRouter);
router.use('/getTags', jwtAuthMiddleware, getTagsRouter);

router.use('/', getHomePage);


module.exports = router;