function alimunimJoinery(input) {
  let countJoinery = Number(input[0]);
  let type = input[1];
  let deliveryOrNo = input[2];
  let singlePrice = 0;
  let totalPrice = 0;

  switch (type) {
    case "90X130":
      singlePrice = 110;
      break;
    case "100X150":
      singlePrice = 140;
      break;
    case "130X180":
      singlePrice = 190;
      break;
    case "200X300":
      singlePrice = 250;
      break;
  }

  totalPrice = countJoinery * singlePrice;

  if (type === "90X130" && countJoinery > 60) {
    totalPrice *= 0.92; 
    } else if (type === "90X130" && countJoinery > 30) {
    totalPrice *= 0.95;
    } else if (type === "100X150" && countJoinery > 80) {
      totalPrice *= 0.9;
    } else if (type === "100X150" && countJoinery > 40) {
        totalPrice *= 0.94;
    } else if (type === "130X180" && countJoinery > 50) {
        totalPrice *= 0.88;
    } else if (type === "130X180" && countJoinery > 20) {
        totalPrice *= 0.93;
    } else if (type === "200X300" && countJoinery > 50) {
        totalPrice *= 0.86;
    } else if (type === "200X300" && countJoinery > 25) {
        totalPrice *= 0.91;
    }

  if (deliveryOrNo === "With delivery") {
    totalPrice += 60;
  }
  if (countJoinery > 99) {
    totalPrice *= 0.96;
  } 
  
  if (countJoinery < 10) {
    console.log("Invalid order");
  } else {
  console.log(`${totalPrice.toFixed(2)} BGN`);
  }
}