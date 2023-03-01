const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

var hbs = exphbs.create({defaultLayout: 'main'});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    // res.send('Its working')
    res.render('home')
})

app.listen(3000, (err) => console.log('Server listening on port 3000'));