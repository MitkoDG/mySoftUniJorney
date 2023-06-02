const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isGuest } = require('../middlewares/guards');

router.get('/register', isGuest(), (req, res) => {
    res.render('register');
});

router.post(
    '/register',
    isGuest(),
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('repassword').custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error('Password does not match !')
        }
        return true;
    }),
    async (req, res) => {
        const { errors } = validationResult(req);
        console.log(errors);
        try {
            if (errors.length > 0) {
                throw new Error('Validation error');
            }

            await req.auth.register(req.body.username, req.body.password);
            res.redirect('/'); // /auth/register

        } catch (error) {
            console.log(error)
            const ctx = {
                errors,
                userData: {
                    username: req.body.username
                }
            };
            res.render('register', ctx);
        }
    }
);

router.get('/login', isGuest(), (req, res) => {
    res.render('login');
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        await req.auth.login(req.body.username, req.body.password)
    } catch (error) {
        console.log(error.message);
        const ctx = {
            errors: [error.message],
            userData: {
                username: req.body.username
            }
        };
        res.render('/login', ctx);
    }
});

module.exports = router;