const formidable = require('formidable');

module.exports = (req, res) =>{
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) =>{
        
        console.log(fields)
        console.log('create item');
        res.writeHead(301, {
            'Location': '/catalog'
        });
        res.end();
    });
};