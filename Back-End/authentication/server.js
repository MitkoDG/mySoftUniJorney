const express = require('express');
const bodyParser = require('express').urlencoded;
const expressSession = require('express-session');
// const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser({ extended: false }));
/*
// long way of generating a cookie and set it 
const sessions = {};

function mySessionStorage(req, res, next) {
  let session = {};
  if (req.cookies.sessionId && sessions[req.cookies.sessionId] != undefined) {
    const id = req.cookies.sessionId
    session = sessions[id];
    console.log('>>> Existing session', session);

  } else {
    createSession();
  };

  req.session = session;

  next();

  function createSession() {
    const id = ('00000000' + (Math.random() * 99999999 | 0).toString(16)).slice(-8);
    sessions[id] = session;

    res.cookie('sessionID', id);
    console.log('New user, generated session with ID', id);

    session.visited = 0;
  }
}

app.use(cookieParser());
app.use(mySessionStorage);
*/
const users = {};

app.use(expressSession({
  secret: 'my random secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.get('/', (req, res) => {
  // console.log(req.cookies);
  // res.cookie('cookieParser_Cookie', 1);
  // res.cookie('My_Cookie', 'DDG');
  res.send('<h1>Hello</h1><a href="/">Home</a> <a href="/register">Register</a> <a href="/login">Login</a>')
  // session.visited++;
  // res.send(`<h1>Hello</h1><p>Your session has data ${JSON.stringify(session)}</p>`)

});

app.get('/register', (req, res) => {
  res.send(`
  <h1>Register</h1><a href="/">Home</a> <a href="/register">Register</a> <a href="/login">Login</a>
  <form action="/register" method="POST">
        <label>Username: <input type="text" name="username"></label>
        <label>Password: <input type="password" name="password"></label>
        <label>Repeat: <input type="password" name="repass"></label>
        <input type="submit" value="Register">
    </form>
    `);
});

app.all('*', (req, res, next) => {
  console.log('>>>', req.method, req.url, req.body);
  console.log('>>> Session data', req.session);
  next();
})

app.get('/login', (req, res) => {
  res.send(`
  <h1>Login</h1><a href="/">Home</a> <a href="/register">Register</a> <a href="/login">Login</a>
  <form action="/login" method="POST">
        <label>Username: <input type="text" name="username"></label>
        <label>Password: <input type="password" name="password"></label>
        <input type="submit" value="Login">
    </form>
    `);
});

app.post('/register', (req, res) => {
  const username = req.body.username;
  users[username] = {
    id: ('00000000' + (Math.random() * 99999999 | 0).toString(16)).slice(-8),
    password: req.body.password,
  };

  res.redirect('/');
});

app.post('/login', (req, res) => {
  const user = users[req.body.username];
  if (user && user.passoword == req.body.passoword) {
    req.session.user = user;
    res.redirect('/');
  } else {
    res.send('Wrong passwrd');
  }

});

app.listen(3000, () => { console.log('Server listening on port 3000'); });