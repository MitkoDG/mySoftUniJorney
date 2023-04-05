const express = require('express');

const app = express();

const sessions = {};

app.get('/', (req, res) => {
    let session = {};
    if (req.headers.cookie) {
        const id = req.headers.cookie.split('=')[1];
        session = sessions[id];
        console.log('Existing session', session);
    } else {
      const id = ('00000000' + (Math.random() * 99999999 | 0).toString(16)).slice(-8);
      sessions[id] = session;
      res.setHeader('Set-Cookie', `sessionId=${id}`);
      console.log('New user, generated session with ID', id);
    };

    res.send(`<h1>Hello</h1><p>Your session has data ${JSON.stringify(session)}</p>`)
});

app.listen(3000, ()=>{console.log('Server listening on port 3000');});