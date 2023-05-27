const jwt = require('jsonwebtoken');
const createError = require('http-errors');

//modulo para exportar middleware

module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.get('Authorization') || req.body.jwt || req.query.jwt;
        if (!jwtToken) {
            const error = createError(401, 'no token provided')
            next(error);
            return;
        }

        const payload = await jwt.verify(jwtToken, process.env.JWT_SECRET);
        req.usuarioRegistradoDelAPI = payload._id;
        next();

    } catch (err) {
        if (err.message === 'invalid signature') {
        next(createError(401, 'invalid token'));
        return;
    }
        next(err)
    }
}