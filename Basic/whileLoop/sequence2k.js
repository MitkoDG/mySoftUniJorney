function sequence2k(input){
    let index = 0;
    let endN = Number(input[index]);

    let start = 1;

    while (start <= endN) {
        console.log(start);
        start = (start * 2) + 1;
    }
}
sequence2k(["3"]);