const jwt = require('jsonwebtoken');

const payload = { message: 'HI'};
const secret = 'my-secret-key';

const token = jwt.sign(payload, secret, { expiresIn: '2d'})

const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiSEkiLCJpYXQiOjE2ODEzMjMzMzAsImV4cCI6MTY4MTQ5NjEzMH0.VXHQjmJ-vZaM_zKpCZa-L4CISxG3aot1mPBAiBBoV3I';

console.log(jwt.decode(myToken));
console.log(jwt.verify(myToken, secret)); // put it in try catch