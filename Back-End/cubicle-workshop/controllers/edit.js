module.exports = {
    edit(req, res) {
        res.render('edit')
    },
    post(req, res) {
        res.redirect('/');
    }
}