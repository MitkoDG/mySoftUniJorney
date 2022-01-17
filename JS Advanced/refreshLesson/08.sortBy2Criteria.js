function sortByTwo(input) {

    let sorted = input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    })

    for (const item of sorted) {
        console.log(item);
    }
}
sortByTwo(['alpha',
    'beta',
    'gamma'])
sortByTwo(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'])