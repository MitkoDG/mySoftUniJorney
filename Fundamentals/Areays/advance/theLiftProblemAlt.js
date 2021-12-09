function theLiftProblem(input) {
    let people = Number(input[0]);
  
    //let spaces = input[1].split(" ");
    let spaces = input[1].split(" ").map(Number);
  
    //let newArray = spaces.slice(0);
    let newArray = [...spaces];
  
    let arrLength = spaces.length;
    //   newArray = newArray.map((x) => Number(x)); // излишно
  
    for (let i = 0; i < arrLength; i++) {
      // let currentWagon = Number(spaces[i]); // излишно
  
      // let peopleInWagon = Math.abs(currentWagon - 4);
      let peopleInWagon = 4 - spaces[i]; // така е по лесно
  
      // ако хората са повече от свободните места - вземаме
      // броя на хората - иначе, свободните места
      let newSeats = people >= peopleInWagon ? peopleInWagon : people;
      people -= newSeats;
  
      // if (people >= 0) { // излишно
      // тука не е нужно splice - много е сложно
      //   newArray.splice(i, 1, Number(spaces[i]) + peopleInWagon);
      newArray[i] = spaces[i] + newSeats;
      // } else {
  
      // нмого сложен начин за изчисляване на
      //   let sum = newArray.reduce((a, b) => a + b, 0);
      //   newArray.splice(i, 1, input[0] - sum);
      //   break;
      // }
    }
  
    if (newArray[arrLength - 1] < 4) {
      // console.log(`The lift has empty spots!\n${newArray.join(" ")}`);
      console.log(`The lift has empty spots!`);
    } else if (people > 0) {
      console.log(`There isn't enough space! ${people} people in a queue!`);
      // console.log(newArray.join(" "));
    }
    //   else if (people === 0) {
    //     console.log(newArray.join(" "));
    //   }
  
    console.log(newArray.join(" "));
  }
  //-------------------------------------
  function lift(a) {
    let people = +a.shift();
    const cart = a[0].split(" ").map(Number);
    const sumOfPassangers = cart.reduce((a, b) => a + b);
    const capacity = cart.length * 4;
    let i = 0;
    let sum = 0;
    let isTrue = true;
    while (i < cart.length) {
      if (people > capacity - sumOfPassangers && isTrue) {
        console.log(
          `There isn't enough space! ${
            people - (capacity - sumOfPassangers)
          } people in a queue!`
        );
        isTrue = false;
      }
      if (people >= 4 - cart[i]) {
        sum = 4 - cart[i];
        cart[i] += sum;
        people -= sum;
      } else if (people !== 0) {
        cart[i] = people;
        people = 0;
        console.log("The lift has empty spots!");
        break;
      } else {
        console.log("The lift has empty spots!");
        break;
      }
      i++;
    }
    console.log(cart.join(" "));
  }