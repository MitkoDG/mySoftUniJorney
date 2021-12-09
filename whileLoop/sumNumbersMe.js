function sumNum(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;

    let sum = 0;

    while (sum < target) {
        sum += Number(input[index])
        index++;
    }
    console.log(sum);

}
sumNum(["100", "10", "20", "30", "40"]);