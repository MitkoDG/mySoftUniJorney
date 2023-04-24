const express = require('express');

const { PORT } = require('./config/index');
const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');
const userService = require('./services/user')

const app = express();

start(app);

async function start(app) {
    await databaseConfig(app);
    expressConfig(app);

    app.get('/', (req, res) => res.send('It works'));

    app.listen(PORT, () => {
        testAuth();
        console.log(`Application started at http://127.0.0.1:${PORT}`)
    });
}

async function testAuth() {
    try {
        const user = await userService.createUser('DDG', '565656');
        console.log(user);
        // const result = await userService.getUserByUsername('ddg');
        // console.log(result);

    } catch (error) {
        console.log('Error in testAuth', error.message);
    }
}