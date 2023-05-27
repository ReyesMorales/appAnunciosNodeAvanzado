const { Usuario } = require('../models');
const jwt = require('jsonwebtoken');

class LoginController {
    index(req, res, next) {
        res.locals.error = '';
        res.locals.email = '';
        res.render('login')
    }
    //Método post para el website
    async post(req, res, next) {
        try {
            const { email, password } = req.body;

            const usuario = await Usuario.findOne({ email: email });

            if (!usuario || !(await usuario.comparePassword(password))) {
                res.locals.error = req.__('Invalid credentials');
                res.locals.email = email;
                res.render('login');
                return;

            }

            req.session.usuarioRegistrado = usuario._id;

            res.redirect('/privado');
        } catch (error) {
            next(error);
        }
    }

    logout(req, res, next) {
        req.session.regenerate(error => {
            if (error) {
                next(error);
                return;
            }
            res.redirect('/');
        })
    }

    //Añadimos método post del API para utilizar JWT
    async postAPI(req, res, next) {
        try {
            const { email, password } = req.body;

            const usuario = await Usuario.findOne({ email: email });

            if (!usuario || !(await usuario.comparePassword(password))) {
                res.json({ error: 'Invalid credentials'});
                return;
            }

            const token = await jwt.sign({ _id: usuario._id }, process.env.JWT_SECRET, {expiresIn: '2d'})

            res.json({ jwt: token });
        } catch (error) {
            next(error);
        }
    }

}



module.exports = LoginController;