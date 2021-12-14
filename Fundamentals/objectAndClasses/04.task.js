function objToJSON(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    }

    console.log(obj);
    let output = JSON.stringify(obj)
    console.log(output);
    let parsed = JSON.parse(output)
    console.log(parsed);
}
objToJSON('George', 'Jones', 'Brown')