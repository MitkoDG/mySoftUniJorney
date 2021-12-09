function solve(input) {
    let neigborhoods = new Map()
    let currentNeighborhoods = input.shift().split(", ")

    for (let neigborhood of currentNeighborhoods) {
        neigborhoods.set(neigborhood, [])
    }

    
    for (let currentPerson of input) {
       currentPerson = currentPerson.split(" - ") 
       let personNeighborhood = currentPerson[0]
       let person = currentPerson[1]

       if (neigborhoods.has(personNeighborhood)){
        neigborhoods.get(personNeighborhood).push(person)
       }
    }
    let sortedNeighborhoods = Array.from(neigborhoods.entries())
    sortedNeighborhoods.sort((a,b) => b[1].length - a[1].length)

    for ( let currentEntry of sortedNeighborhoods) {
        let neighborhoodToPrint = currentEntry[0]
        let personsToPrint = currentEntry[1]
        console.log(`${neighborhoodToPrint}: ${personsToPrint.length}`);
        for ( let currentPerson of personsToPrint) {
            console.log(`--${currentPerson}`);
        }
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)