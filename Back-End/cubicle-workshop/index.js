const express = require('express');
const hbs = require('express-handlebars');
const { about } = require('./controllers/about');
const { catalog } = require('./controllers/catalog');
const { create, post } = require('./controllers/create');
const { details } = require('./controllers/details');
const { notFound } = require('./controllers/notFound');

const app = express();
const port = 3000;

app.engine('hbs', hbs({
    extends: '.hbs'
}));
// app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');
app.use('static', express.static('static'))

app.get('/', catalog);
app.get('/about', about);
app.get('/details/:id', details);
app.get('/create', create);
app.post('/create', post);
app.all('*', notFound);

app.listen(port, console.log(`Listening on port ${port}! Now its up to you...`));