// function partyTask(input) {
//   let guestList = {
//     vip: [],
//     regular: [],
//   };
//   let guest = input.shift();
//   while (guest !== "PARTY") {
//     let firstChar = guest[0];
//     if (isNaN(firstChar)) {
//       guestList.regular.push(guest);
//     } else {
//       guestList.vip.push(guest);
//     }
//     guest = input.shift();
//   }
//   for (let guest of input) {
//     if (guestList.vip.includes(guest)) {
//       let index = guestList.vip.indexOf(guest);
//       guestList.vip.splice(index, 1);
//     } else if (guestList.regular.includes(guest)) {
//       let index = guestList.regular.indexOf(guest);
//       guestList.regular.splice(index, 1);
//     }
//   }
//   let vipCount = guestList.vip.length;
//   let regularCount = guestList.regular.length;

//   console.log(vipCount + regularCount);
//   console.log(guestList.vip.join("\n"));
//   console.log(guestList.regular.join("\n"));
// }
// partyTask([
//   "7IK9Yo0h",
//   "9NoBUajQ",
//   "Ce8vwPmE",
//   "SVQXQCbc",
//   "tSzE5t0p",
//   "PARTY",
//   "9NoBUajQ",
//   "Ce8vwPmE",
//   "SVQXQCbc",
// ]);

//alternative but gives you 20 points
function task(input) {
  let regular = [];
  let vip = [];
  let endOfGuest = input.indexOf("PARTY");
  let commingGuest = input.slice(endOfGuest + 1);
  let list = input.slice(0, endOfGuest);

  for (let guest of list) {
    let firstChar = guest[0];
    if (!isNaN(firstChar)) {
      vip.push(guest);
    } else {
      regular.push(guest);
    }
  }
  for (let i = 0; i < commingGuest.length; i++) {
    let currentGuest = commingGuest[i];
    if (vip.includes(currentGuest)) {
      let position = vip.indexOf(currentGuest);
      vip.splice(position, 1);
    } else if (regular.includes(currentGuest)) {
      let position = regular.indexOf(currentGuest);
      regular.splice(position, 1);
    }
  }
  let count = vip.length + regular.length;
  console.log(count);
  console.log(vip.join("\n"));
  console.log(regular.join("\n"));
}
task([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
