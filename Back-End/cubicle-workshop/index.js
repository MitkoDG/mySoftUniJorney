const express = require('express');
const hbs = require('express-handlebars');
const { catalog } = require('./controllers/catalog');

const app = express();
const port = 3000;

app.engine('hbs', hbs({
    extends: '.hbs'
}));
// app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');
app.use('static', express.static('static'))

app.get('/', catalog);

app.listen(port, console.log(`Listening on port ${port}! Now its up to you...`));