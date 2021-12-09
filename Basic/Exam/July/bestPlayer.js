function bestPlayer(input) {
    let i = 0;
    let bestPlayer = 0;
    let max = 0;

    while (input[i] !== 'END') {
        let newPlayer = input[i];
        let newMax = Number(input[i+1]);
        if (newMax > max) {
            max = newMax;
            bestPlayer = newPlayer;
        }
        if (max >= 10) {
            break;
        }
        i++;

    }
    console.log(`${bestPlayer} is the best player!`);
    if (max >= 3) {
        console.log(`He has scored ${max} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${max} goals.`);
    }
    
}
bestPlayer(["Neymar", "2",
"Ronaldo",
"1",
"Messi",
"3",
"END"]);