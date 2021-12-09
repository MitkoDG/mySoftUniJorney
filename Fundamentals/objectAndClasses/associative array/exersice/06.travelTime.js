function travelTask(input) {
  let countries = {};

  for (let row of input) {
    let currentRow = row.split(" > ");
    let country = currentRow[0];
    let city = currentRow[1];
    let price = Number(currentRow[2]);

    if (!countries.hasOwnProperty(country)) {
      countries[country] = {};
    }
    if (!countries[country].hasOwnProperty(city)) {
      countries[country][city] = price;
    }
    if (countries[country][city] > price) {
      countries[country][city] = price;
    }
  }

  let keys = Object.keys(countries);
  keys.sort((a, b) => a.localeCompare(b));

  for (let item of keys) {
    let sortedCities = Object.entries(countries[item]);
    sortedCities.sort((a, b) => a[1] - b[1]);
    let result = [];
    for (let city of sortedCities) {
      result.push(city.join(" -> "));
    }
    console.log(`${item} -> ${result.join(" ")}`);
  }
}
travelTask([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);

//alternative
// function visitCities(arr) {
//   let countries = {};

//   let country = "";
//   let city = "";
//   let cost = 0;

//   for (let item of arr) {
//     [country, city, cost] = item.split(" > ");
//     cost = Number(cost);

//     if (!countries.hasOwnProperty(country)) {
//       countries[country] = {};
//     }

//     if (countries[country].hasOwnProperty(city)) {
//       if (countries[country][city] > cost) {
//         countries[country][city] = cost;
//       }
//     } else {
//       countries[country][city] = cost;
//     }
//   }

//   let sorted = Object.entries(countries);
//   sorted = sorted.sort((a, b) => a[0].localeCompare(b[0]));

//   let sortedCities = [];

//   for (let item of sorted) {
//     let country = item[0];
//     delete item[1].total;
//     sortedCities = Object.entries(item[1]);
//     sortedCities
//       .sort((a, b) => a[0].localeCompare(b[0]))
//       .sort((a, b) => a[1] - b[1]);

//     let str = `${country} -> `;

//     for (let city of sortedCities) {
//       str += `${city[0]} -> ${city[1]} `;
//     }

//     console.log(str);
//   }
// }
// visitCities([
//   "Bulgaria > Sofia > 500",
//   "Bulgaria > Sopot > 800",
//   "France > Paris > 2000",
//   "Albania > Tirana > 1000",
//   "Bulgaria > Sofia > 200",
// ]);

//alternative
function solve(arr) {
  const obj = {};
  arr.forEach((item) => {
    const [country, town, cost] = item.split(" > ");
    obj[country] = obj[country] ? obj[country] : {};
    obj[country][town] = obj[country][town] ? obj[country][town] : +cost;
    if (obj[country][town] > +cost) {
      obj[country][town] = +cost;
    }
  });
  const keys = Object.entries(obj).sort();
  keys.forEach((item) => {
    const currCountry = item[0];
    const value = Object.entries(item[1]);
    value.sort((a, b) => {
      return a[1] - b[1];
    });
    const curr = value.map(item => {
     return item.join(' -> ');
    })
    console.log(`${currCountry} -> ${curr.join(' ')}`);
  });
}