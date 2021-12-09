function addressBook(input) {
    let addressBook = {};
    for (let personName of input) {
        personName = personName.split(":");
        let name = personName[0];
        let address = personName[1];
        addressBook[name] = address;
    }
    let sortedBook = Object.entries(addressBook)
    sortedBook = sortedBook.sort((a, b) => {
        let keyA = a[0]
        let keyB = b[0]
        return keyA.localeCompare(keyB)
    })

    for (let sortedEntry of sortedBook) {
        console.log(`${sortedEntry[0]} -> ${sortedEntry[1]}`);
    }

}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
)