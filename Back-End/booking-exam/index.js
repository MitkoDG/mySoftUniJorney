const express = require('express');

const { PORT } = require('./config/index');
const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');

const app = express();

start(app);

async function start(app) {
    await databaseConfig(app);
    expressConfig(app);

    app.get('/', (req, res) => res.send('It works'));

    app.listen(PORT, () => console.log(`Application started at http://127.0.0.1:${PORT}`));
}
