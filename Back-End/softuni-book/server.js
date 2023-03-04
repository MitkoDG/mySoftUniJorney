const express = require('express');
const exphbs = require('express-handlebars');
const home = require('./controllers/home');
const catalog = require('./controllers/catalog');
const storage = require('./util/storage');

async function start() {
    const port = 3000;
    const app = express();
    
    app.use('/static', express.static('static'));
    
    const hbs = exphbs.create({ defaultLayout: 'main' });
    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
    app.set('views', './views');
    
    app.use(await storage());
    app.get('/', home);
    
    app.use(catalog);
    
    app.listen(port, (err) => console.log('Server listening on port 3000')); 
};

start();

