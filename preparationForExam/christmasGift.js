function christmas(input) {

    let index = 0
    let command = input[index]


    let adults = 0
    let children = 0


    while (command !== "Christmas") {
        let age = Number(command)
        index++

        if (age > 16) {
            adults++
        } else {
            children++
        }

        command = input[index];
    }
    let moneyForToys = children * 5;
    let moneyForSwethers = adults * 15;


    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${children}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSwethers}`);

}
christmas(["18",
"20",
"48",
"45",
"56",
"37",
"12",
"14",
"Christmas"])
 