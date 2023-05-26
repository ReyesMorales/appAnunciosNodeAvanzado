const { Usuario } = require('../models');

class PrivadoController {

    async index(req, res, next) {
        try {
            const usuarioId = req.session.usuarioRegistrado;

            const usuario = await Usuario.findById(usuarioId);

            if(!usuario) {
                next(new Error('usuario no encontrado'))
                return;
            }

            res.render('privado', { email: usuario.email });

        } catch (error) {
            next(error)
        }

       


        
    }

}

module.exports = PrivadoController;