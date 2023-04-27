const express = require('express');

const { PORT } = require('./config/index');
const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');
// const userService = require('./services/user');
// const authMiddleware = require('./middlewares/auth');


start();

async function start() {
    const app = express();
    
    await databaseConfig(app);
    expressConfig(app);

    app.get('/', (req, res) => res.send('It works'));

    app.listen(PORT, () => {
        // testAuth();
        console.log(`Application started at http://127.0.0.1:${PORT}`)
    });
}

async function testAuth() {
    const reqMock = {};
    const resMock = {
        cookie() {
            console.log('Set cookie', argiments);
        }
    };

    const nextMock = () => { };

    try {
        const auth = authMiddleware();
        auth(reqMock, resMock, nextMock);

        await reqMock.auth.login('Sasho', '1q2w3e');
        // await userService.createUser('ddg', '123654');
        // const result = await userService.getUserByUsername('ddg');
        // console.log(result);

    } catch (error) {
        console.log('Error in testAuth', error.message);
    }
}