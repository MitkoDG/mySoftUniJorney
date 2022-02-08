let map = new Map();

map.set('name', 'Pesho');
map.set('age', 20);
map.set('isMale', true);

console.log(map.get('name'));
map.set('age', 21);

map.set(1, 'One');

// Set object as key
let obj = {name: 'Gosho'};
map.set(obj, 'nagoshoobekta');

console.log(map.get(obj));

console.log(map);

// Iterate map
for (const [key, value] of map) {
    console.log(key);
}
