const http = require('http');

const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    console.log("In the middleware and its always runs");
    next(); // Allows to request to continue to the next middleware in line
});

app.use('/add-product', (req, res, next) => {
    console.log("Product middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    console.log("Another middleware");
    res.send("<h1>Hello from Express</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);

// alternative of the above

app.listen(3000)