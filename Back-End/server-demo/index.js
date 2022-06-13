const http = require('http');

const router = require('./router');

const aboutController = require('./controllers/aboutController');
const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');

router.get('/', homeController);
router.get('/catalog', catalogController);
router.get('/about', aboutController)

router.post('/create', createController)

const port = 3000;
const server = http.createServer(requestHandler);



function requestHandler(req, res) {
    console.log('>>>', req.method, req.url);
    const handler = router.match(req.url)
    handler(req, res);
}

server.listen(port, () => console.log('Server is listening on port ' + port + ' http://localhost:3000/'));