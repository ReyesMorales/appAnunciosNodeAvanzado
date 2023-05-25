module.exports = (req, res, next) => {
    if (!req.session.usuarioRegistrado) {
        res.redirect('/login');
        return;
    }
    next();
}