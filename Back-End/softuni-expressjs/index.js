const express = require('express');
const catalogRouter = require('./catalog');

const app = express();
app.use(catalogRouter);

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

const data = {
    name: 'Mario',
    age: 33
}
app.get('/data', (req,res) => {
    res.json(data);
});

app.get('/contact', (req,res) =>{
    res.redirect('/about');
});

app.get('/about', (req,res) => {
    res.send('About page !')
})

app.all('*', (req,res) => {
    res.status(404);
    res.send('Page not found => ' + req.method);
});

app.listen(3000, (err) => console.log('Server listening on port 3000'));