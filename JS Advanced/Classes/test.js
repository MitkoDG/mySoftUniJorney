let map = new Map();
map.set("one", 1);
map.set("eight", 8);
map.set("two", 2);
let sorted = Array.from(map.entries()).sort((a, b) => a[1] - b[1]);
console.log(sorted);
let sortedtest = map.entries();
console.log(sortedtest); // needs to be array to iterate it
for (let kvp of sorted) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
}
