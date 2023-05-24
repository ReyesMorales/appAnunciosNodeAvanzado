const { Usuario } = require('../models');

class LoginController {
    index(req, res, next) {
        res.locals.error = '';
        res.locals.email = '';
        res.render('login')
    }

    async post(req, res, next) {
        try {
            const { email, password } = req.body;

            const usuario = await Usuario.findOne({ email: email });

            if(!usuario || usuario.password !== password) {
                res.locals.error = req.__('Invalid credentials');
                res.locals.email = email;
                res.render('login');
                return;

            }

            res.redirect('/privado');
        } catch (error) {
            next(error);
        }
    }
}

module.exports = LoginController;