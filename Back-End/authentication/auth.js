const bcrypt = require('bcrypt');

const users = {};

module.exports = (req, res, next) => {
    req.register = async (username, password) => {


        const id = ('00000000' + (Math.random() * 99999999 | 0).toString(16)).slice(-8);

        const hashedPassword = await bcrypt.hash(trq.body.password, 8)
        users[id] = {
            username,
            hashedPassword
        };

        req.login = async (username, password) => {

            const user = Object.entries(users).find(([id, u]) => u.username == username);

            console.log('Checking password', password);

            const passwordMatch = await bcrypt.compare(req.body.password, user[1].hashedPassword);
            if (user && passwordMatch) {
                req.session.user = {
                    _id: user[1].id,
                    username
                };
                res.redirect('/');
            } else {
                res.send('Wrong passwrd');
            }
        }
        console.log('New user', users);
    }

    next();
}