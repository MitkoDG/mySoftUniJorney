const fs = require('fs');

    
const requestHandller = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>My first Page</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>')
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
          console.log(chunk);
          body.push(chunk);
        });
        return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          fs.writeFile('message.txt', message, err => {
            // error handling
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
          });
        });
    
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My first Page</title></head>')
    res.write('<body><h1>My first Page by using Node JS</h1></body>')
    res.write('</html>')
    res.end();
}

module.exports = {
    handler: requestHandller,
    someText: 'Some hard coded text'
};