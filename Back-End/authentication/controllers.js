module.exports = (app) => {
    app.all('*', (req, res, next) => {
        if (req.url.includes('favicon') == false) {
            console.log('>>>', req.method, req.url, req.body);
            console.log('>>> Session data', req.session);
        };
        next();
    })

    app.get('/', (req, res) => {
        const title = 'Welcome'
        if (req.session.user) {
            title = 'Welcome, ' + req.session.user.username;
        }
        // console.log(req.cookies);
        // res.cookie('cookieParser_Cookie', 1);
        // res.cookie('My_Cookie', 'DDG');
        res.status(200).send(layout('<p>Home Page</p>', title))
        // session.visited++;
        // res.send(`<h1>Hello</h1><p>Your session has data ${JSON.stringify(session)}</p>`)

    });

    app.get('/register', (req, res) => {
        const title = 'Register'
        if (req.session.user) {
            title = 'Welcome, ' + req.session.user.username;
        }

        res.status(200).send(layout(`
        <h1>Register</h1><a href="/">Home</a> <a href="/register">Register</a> <a href="/login">Login</a>
        <form action="/register" method="POST">
              <label>Username: <input type="text" name="username"></label>
              <label>Password: <input type="password" name="password"></label>
              <label>Repeat: <input type="password" name="repass"></label>
              <input type="submit" value="Register">
          </form>
          `), title);
    });

    app.get('/login', (req, res) => {
        const title = 'Login'
        if (req.session.user) {
            title = 'Welcome, ' + req.session.user.username;
        }
        res.status(200).send(layout(`
        <h1>Login</h1><a href="/">Home</a> <a href="/register">Register</a> <a href="/login">Login</a>
        <form action="/login" method="POST">
              <label>Username: <input type="text" name="username"></label>
              <label>Password: <input type="password" name="password"></label>
              <input type="submit" value="Login">
          </form>
          `), title);
    });
}

function layout(html, title) {
    return `<h1>${title}</h1><a href="/">Home</a> 
    <a href="/register">Register</a> 
    <a href="/login">Login</a>
    ${html}`
}