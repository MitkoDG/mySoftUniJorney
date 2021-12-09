function sumNumbers(input) {

    let target = Number(input[0]);
    let sum = 0;
    let inputL = input.length;

    // let index = 1;

    // while (sum < target) {
    //     sum += Number(input[index]);
    //     index++;
    // }

    for(let i = 1; i < inputL; i++){
        sum+=Number(input[i]);
        if(sum >=target){
            break;
        }
    }
    console.log(sum);

}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"]);
