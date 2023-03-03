const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

var hbs = exphbs.create({defaultLayout: 'main'});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    // res.send('Its working')
    const data = {
        name: 'Pesho',
        age: 22,
        // items: {
        //     pocket: 'Lindor',
        // }
        items: [
            'Sweets',
            'Wallet',
            'Coins',
        ]
    }
    res.render('home', data)
})

app.listen(3000, (err) => console.log('Server listening on port 3000'));