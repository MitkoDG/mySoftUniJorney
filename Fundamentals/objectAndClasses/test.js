// function printer(obj) {
//   let entries = Object.keys(obj);

//   for (let key of entries) {
//     console.log(`${key} -> ${obj[key]}`);
//   }
//   obj.myArray = [1, 2, 3, 4, 5];
// }

// printer({
//   name: "Sofia",
//   area: 492,
//   population: 1238438,
//   country: "Bulgaria",
//   postCode: "1000",
// });

function meeting(input) {
  let calendar = {};
  for (let line of input) {
    let [day, name] = line.split(" ");
    // let day = splited[0];
    // let name = splited[1];
    if (calendar.hasOwnProperty(day)) {
      console.log(`Conflict! ${day} is already booked`);
    } else {
      calendar[day] = name;
      console.log(`Scheduled meeting with ${name} on ${day}`);
    }
  }

  for (let key in calendar) {
    console.log(`${key} meeting with ${calendar[key]}`);
  }
}
meeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
