// function cityPrinter(city) {
//     let cityEntries = Object.entries(city)
//     for (let [cityKey, cityValue] of cityEntries) {
//         console.log(`${cityKey} -> ${cityValue}`);
//     }
// }

// alternative of the above
function cityPrinterKey(city) { 
    let cityKeys = Object.keys(city)

    for (let key of cityKeys) {
        console.log(`${key} -> ${city[key]}`);
    }
}

cityPrinterKey({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)