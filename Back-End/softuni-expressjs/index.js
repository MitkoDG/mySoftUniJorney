const express = require('express');

const app = express();

app.get('/', (req,res) => {
    // res.status(200);
    res.status(200);
    res.send('Hello buddy!');
});

app.get('/download', (req,res) => {
    res.download('./demo.pdf');
});

app.get('/open', (req,res) => {
    res.sendFile(__dirname + '/demo.pdf');
});

app.post('/catalog/:productId/details', (req,res) => {
    console.log(req.params);
    res.status(201);
    res.send('Post created!');
});

app.get('/catalog', (req,res) => {
    res.status(200);
    res.send('Catalog Page!');
});

app.post('/catalog', (req,res) => {
    res.status(201);
    res.send('Post created!');
});

app.all('*', (req,res) => {
    res.status(404);
    res.send('Page not found => ' + req.method);
});

app.listen(3000, (err) => console.log('Server listening on port 3000'));