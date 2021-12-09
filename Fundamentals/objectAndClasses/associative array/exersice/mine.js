function task(input) {
  let countries = {};

  for (let line of input) {
    [country, city, cost] = line.split(" > ");
    cost = Number(cost);

    if (!countries.hasOwnProperty(country)) {
      countries[country] = {};
    }

    if (!countries[country].hasOwnProperty(city)) {
      countries[country][city] = cost;
    }
    if (countries[country][city] > cost) {
      countries[country][city] = cost;
    }
  }

  let letsSort = Object.keys(countries);
  letsSort = letsSort.sort((a, b) => {
    return a.localeCompare(b);
  });

  for (let item of letsSort) {
    let sortedCities = Object.entries(countries[item]).sort((a, b) =>{
      return a[1] - b[1]
    })

    let result = [];
    for (let city of sortedCities) {
      result.push(city.join(" -> "));
    }

    console.log(`${item} -> ${result.join(" ")}`);
  }
}
// function task(input) {
//   let countries = {};
//   for (let line of input) {
//     [country, city, cost] = line.split(" > ");
//     cost = Number(cost);

//     if (!countries.hasOwnProperty(country)) {
//       countries[country] = {};
//     }

//     if (!countries[country].hasOwnProperty(city)) {
//       countries[country][city] = cost;
//     }
//     if (countries[country][city] > cost) {
//       countries[country][city] = cost;
//     }
//   }
//   let letsSort = Object.keys(countries);
//   letsSort = letsSort.sort((a, b) => {
//     return a.localeCompare(b);
//   });
//   for (let item of letsSort) {
//     let sortedCities = Object.entries(countries[item]).sort((a, b) => {
//       return a[1] - b[1];
//     });
//     let result = [];
//     for (let city of sortedCities) {
//       result.push(city.join(" -> "));
//     }
//     console.log(`${item} -> ${result.join(" ")}`);
//   }
// }
task([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
