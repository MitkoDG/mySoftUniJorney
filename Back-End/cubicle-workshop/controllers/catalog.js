module.exports = {
    catalog: async (req, res) => {
        const cubes = req.storage.getAll(req.query);

        const ctx = {
            title: 'Cubicle',
            cubes,
            search: req.query.search,
            from: req.query.from,
            to: req.query.to
        }
        res.render('index', ctx);
    }
};