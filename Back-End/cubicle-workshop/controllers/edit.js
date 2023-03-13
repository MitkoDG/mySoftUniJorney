module.exports = {
    edit(req, res) {
        res.render('edit', {title: 'Edit Cube'})
    },
    post(req, res) {
        res.redirect('/');
    }
}