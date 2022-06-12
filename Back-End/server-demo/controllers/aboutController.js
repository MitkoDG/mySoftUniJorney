const layout = require('../views/layout')

const html = `
<div>
<h1>About Us</h1>
<p>About page</p>
</div>
`;

module.exports = (req, res) =>{
    res.write(layout(html, 'About'));
    res.end();
};