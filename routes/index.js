var express = require('express');
var router = express.Router();
const getAdvertsRouter = require('./getAdverts');
const createAdvertRouter = require('./createAdvert');
const getAdvertByIdRouter = require('./getAdvertById');
const updateAdvertRouter = require('./updateAdvert');
const deleteAdvertRouter = require('./deleteAdvert');
const getTagsRouter = require('./getTags');
const getHomePage = require('./getHomePage');
const i18n = require('../lib/i18nConfigure');
const LoginController = require('../controllers/LoginController');
const PrivadoController = require('../controllers/PrivadoController');
const session = require('express-session');
const sessionAuth = require('../lib/sessionAuthMiddleware');
const MongoStore = require('connect-mongo');
const jwtAuthMiddleware = require('../lib/jwtAuthMiddleware');


const Anuncio = require('../models/Anuncio');
const Tag = require('../models/Tag');


/* Rutas del API */
const loginController = new LoginController();
router.post('/api/login', loginController.postAPI);
router.use(session({
    name: 'nodepop-session',
    secret: 'ajajsojpjf123',
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 2
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_CONNECTION_STR
    })
}))
router.use('/getadverts', jwtAuthMiddleware, getAdvertsRouter);
router.use('/createadvert', jwtAuthMiddleware,  createAdvertRouter);
router.use('/getAdvertById', jwtAuthMiddleware,  getAdvertByIdRouter);
router.use('/updateAdvert', jwtAuthMiddleware,  updateAdvertRouter);
router.use('/deleteAdvert', jwtAuthMiddleware,  deleteAdvertRouter);
router.use('/getTags', jwtAuthMiddleware,  getTagsRouter);

/* Rutas del website */
const privadoController = new PrivadoController();

router.use((req, res, next) => {
    res.locals.session = req.session;
    next();
  })
  

router.use(i18n.init);
router.use('/', getHomePage);
router.use('/features', require('./features'));
router.use('/change-locale', require('./change-locale'));
router.get('/login', loginController.index);
router.post('/login', loginController.post);
router.get('/logout', loginController.logout);
router.get('/privado', sessionAuth, privadoController.index);




module.exports = router;