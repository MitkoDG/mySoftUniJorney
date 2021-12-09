// function destinationMapper(destination) {//100/100;
//     const pattern = /([=\/])([A-Z][A-Za-z]{2,})\1/g;
//     const pattern2 = /([A-Z][A-Za-z]{2,})\b/g;

//     let count = 0;
//     let finalCities = [];

//     let matched = destination.match(pattern)
//     if (pattern2.test(matched) && matched !== null) {
//         finalCities = (matched.join(", ").match(pattern2));
//     }
//     finalCities.forEach(el => count += el.length);
//     console.log(`Destinations: ${finalCities.join(", ")}`);
//     console.log(`Travel Points: ${count}`);
// }
// destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
// destinationMapper("ThisIs some InvalidInput");

// function solve(input) {
//     let pattern = /([=/])(?<city>[A-Z][A-Za-z]{2,})\1/g;
//     let validMatch;
//     let total = 0;
//     let result = [];
//     while ((validMatch = pattern.exec(input))) {
//         if (validMatch != null) {
//             let { city } = validMatch.groups;
//             result.push(city);
//             total += city.length;
//         }
//     }

//     console.log(`Destinations: ${ result.join(", ") }`);
//     console.log(`Travel Points: ${ total }`);
// }
// solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
// solve("ThisIs some InvalidInput");

// console.log('Solution by Viktor');

function destinationTask(text) {
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})(\1)/g
    let result = []
    let points = 0
    let match = pattern.exec(text)
    // while there is a match
    // - store destination name (second group)
    // - find next match
    while (match != null) {
        result.push(match[2])
        points += match[2].length

        match = pattern.exec(text)
    }

    // calculate travel points
    // print result
    console.log('Destinations: ' + result.join(', '));
    console.log('Travel Points: ' + points);


}
destinationTask("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")