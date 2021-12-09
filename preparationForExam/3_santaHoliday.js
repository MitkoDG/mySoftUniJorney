function solve(input) {
    // •	Първи ред – дни за престой – цяло число в интервала[0...365]
    // •	Втори ред –  вид помещение –  "room for one person", "apartment" или "president apartment"
    // •	Трети ред –  оценка - "positive"  или "negative"

    let daysStay = Number(input[0]);
    let nightsStay = daysStay - 1;
    let roomType = input[1];
    let feedback = input[2];

    let SumToPay = 0;

    // •	"room for one person" – 18.00 лв за нощувка
    // •	"apartment" – 25.00 лв за нощувка 
    // •	"president apartment" – 35.00 лв за нощувка

    switch (roomType) {
        case "room for one person":
            SumToPay = nightsStay * 18.00;
            // no discount for this room type;
            break;
        case "apartment":
            SumToPay = nightsStay * 25.00;
            if (daysStay < 10) {
                SumToPay = SumToPay * 0.70; //30% от крайната цена отстъпка
            } else if (daysStay > 10 && daysStay < 15) {
                SumToPay = SumToPay * 0.65;
            } else if (daysStay > 15) {
                SumToPay = SumToPay * 0.50;
            }
            break;

        case "president apartment":
            SumToPay = nightsStay * 35.00;
            if (daysStay < 10) {
                SumToPay = SumToPay * 0.90; //10% от крайната цена отстъпка
            } else if (daysStay > 10 && daysStay < 15) {
                SumToPay = SumToPay * 0.85;
            } else if (daysStay > 15) {
                SumToPay = SumToPay * 0.80;
            }
            break;
    }

    if (feedback === "positive") {
        SumToPay *= 1.25;
    } else if (feedback === "negative") {
        SumToPay *= 0.90;
    }
    console.log(SumToPay.toFixed(2));
}

solve(["2",
"apartment",
"positive"])
