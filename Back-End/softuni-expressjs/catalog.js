const router = require('express').Router();

router.post('/catalog/:productId/details', (req,res) => {
    console.log(req.params);
    res.status(201);
    res.send('Post created!');
});

router.get('/catalog', (req,res) => {
    res.status(200);
    res.send('Catalog Page!');
});

router.post('/catalog', (req,res) => {
    res.status(201);
    res.send('Post created!');
});

module.exports = router;