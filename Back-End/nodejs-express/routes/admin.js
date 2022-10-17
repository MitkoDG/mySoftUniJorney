const express = require('express');

const router = express.Router();



router.get('/admin/add-product', (req, res, next) => {
    console.log("Product middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});

router.post('/admin/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;