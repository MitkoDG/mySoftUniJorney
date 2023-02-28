function isAdmin(req,res, next) {

    if (req.headers.hasOwnProperty('x-admin')) {
        next()
    } else {
        res.status(401);
        res.send('Admins only. Pelase sign in');
    }

}

module.exports = isAdmin;