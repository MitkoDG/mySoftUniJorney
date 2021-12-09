function charity(input) {
   let campaneDays = Number(input[0]); 
   let cakeMakers = Number(input[1]);
   let cakesNum = Number(input[2]);
   let gofretiNum = Number(input[3]);
   let panecakesNum = Number(input[4]);

   let cakesPrice = 45;
   let gofretaPrice = 5.80;
   let panecakesPrice = 3.20;

   let cakesSum = cakesNum * cakesPrice;
   let gofretiSum = gofretaPrice * gofretiNum;
   let panecakesSum = panecakesNum * panecakesPrice;

   let totalForDay = (cakesSum + gofretiSum + panecakesSum) * cakeMakers;
   let wholeCampaneTotal = totalForDay * campaneDays;
   let totalAfterCost = wholeCampaneTotal - ( wholeCampaneTotal / 8);
   
   console.log(totalAfterCost);
}
charity(["23","8","14","30","16"])
