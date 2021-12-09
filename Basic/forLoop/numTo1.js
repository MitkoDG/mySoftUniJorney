function numbersTo1(input) {
    let set = Number(input[0]);

    for ( let num = 1; num <= set; num+=3) {
        console.log(num);
    }

}
numbersTo1([6]);