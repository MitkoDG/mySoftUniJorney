const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('Hello buddy!');
});

app.listen(3000, (err) => console.log('Server listening on port 3000'));