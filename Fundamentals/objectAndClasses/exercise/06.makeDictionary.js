function dictionary(arr) {
    let terms = {};
    
    for (let item of arr) {
        let obj = JSON.parse(item);
        
        for (let key in obj) {
            terms[key] = obj[key];
        }
    }

    let sortedTerms = Object.entries(terms);

    sortedTerms = sortedTerms.sort((a, b) => a[0].localeCompare(b[0]));

    for (let item of sortedTerms) {
        console.log(`Term: ${item[0]} => Definition: ${item[1]}`);
    }
}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )