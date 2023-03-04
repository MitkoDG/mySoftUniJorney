const express = require('express');
const exphbs = require('express-handlebars');
const home = require('./controllers/home');

const port = 3000;
const app = express();

app.use('/static', express.static('static'));

const hbs = exphbs.create({ defaultLayout: 'main' });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', home);

app.listen(port, (err) => console.log('Server listening on port 3000'));