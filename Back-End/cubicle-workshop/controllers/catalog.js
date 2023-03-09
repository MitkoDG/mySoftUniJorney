module.exports = {
    catalog: async (req, res) => {
        const cubes = req.storage.getAll();
        const ctx = {
            title: 'Cubicle',
            cubes
        }
        res.render('index', ctx);
    }
};