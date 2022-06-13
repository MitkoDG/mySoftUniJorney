const layout = require('../views/layout');

const html = `
<div>
<h1>Catalog</h1>
<form method="POST" action="/create">
<label>Name <input type="text" name="name"></label>
<label>S/N <input type="text" name="serial"></label>
<input type="submit" value="Create Item">
</form>
<ul>
    <li>First Item</li>
    <li>Second Item</li>
    <li>Third Item></li>
</ul>
</div>
`;

module.exports = (req, res) =>{
    res.write(layout(html));
    res.end()
};