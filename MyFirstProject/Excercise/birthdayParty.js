function birthdayParty(input){
    let rentHall = Number(input[0]);

    let cakePrice = rentHall * 0.20;
    let drinks = cakePrice * 0.55;
    let animator = rentHall / 3;

    let budget = rentHall + cakePrice + drinks + animator;

    console.log(budget);
    
}
birthdayParty(['2250'])