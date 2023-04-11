const express = require('express');
const bodyParser = require('express').urlencoded;
const expressSession = require('express-session');
// const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const routes = require('./controllers');
const auth = require('./auth');

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



// const saltRounds = 10;
// const myPlaintextPassword = 'password1';
// const someOtherPlaintextPassword = 'password2 ';

// bcrypt.genSalt(saltRounds, function (err, salt) {
//   bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
//     // Store hash in your password DB.
//   });
// });

// Load hash from your password DB.
// bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
// result == true
// });
// bcrypt.compare(someOtherPlaintextPassword, hash, function (err, result) {
// result == false
// });


app.use(expressSession({
  secret: 'my random secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(auth);

routes(app);

app.post('/register', async (req, res) => {
  await req.register(req.body.username, req.body.password);
  res.redirect('/login');
});

app.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const passwordsMatch = await req.login(username, password);
  if (passwordsMatch) {
    res.redirect('/');
  } else {
    res.send(403, 'Wrong password');
  }
});

app.listen(3000, () => { console.log('Server listening on port 3000'); });