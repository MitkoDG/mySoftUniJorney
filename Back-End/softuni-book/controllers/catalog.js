const router = require('express').Router();

router.get('/catalog', (req, res) => {
    const ctx = {
        books: req.storage.getAll()
    };

    res.render('catalog', ctx);
});

module.exports = router