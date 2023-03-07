module.exports = {
    catalog: (req, res) => {
        console.log(req.storage);
        res.render('index', { title: 'Cubicle'});
    }
};