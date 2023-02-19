const express = require('express');

const app = express();

app.get('/', (req,res) => {
    // res.status(200);
    res.send(200, 'Hello buddy!');
});

app.listen(3000, (err) => console.log('Server listening on port 3000'));