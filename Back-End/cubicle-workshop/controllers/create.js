module.exports = {
    create: (req, res) => {
        res.render('create', { title: 'Create Cube'});
    },
    post: (req, res) => {
        res.redirect('/')
    }
};