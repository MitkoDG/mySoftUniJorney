function architect(input) {
    let name = input[0];
    let hours = input[1];
    let total = hours * 3;
    
    console.log(`The architect ${name} will need ${total} hours to complete ${hours} project/s.`);
}
architect(["Dimitar", '4']);