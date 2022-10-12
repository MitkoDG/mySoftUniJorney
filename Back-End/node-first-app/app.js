const http = require('http');

// function rqListener(req, res) {
//     console.log(req.url, req.method, req.geaders);
//     // process.exit()
// }

const server = http.createServer((req,res) =>{
    const url = req.url;
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My first Page</title></head>')
    res.write('<body><h1>My first Page by using Node JS</h1></body>')
    res.write('</html>')
});

server.listen(3000);