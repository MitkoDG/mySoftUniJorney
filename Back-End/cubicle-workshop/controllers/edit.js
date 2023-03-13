module.exports = {
    async edit(req, res) {
        const cube = await req.storage.getById(req.params.id);
        cube[`select${cube.difficulty}`] = true;
        if (!cube) {
            res.redirect('404');
        } else {
            const ctx = {
                title: 'Edit Cube',
                cube
            }
        }
        res.render('edit', { title: 'Edit Cube' })
    },
    post(req, res) {
        
        res.redirect('/');
    }
}