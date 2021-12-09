function multiplingTable(input) {
    let num = input[0];
    let firstN = Number(num[2]);
    let secondN = Number(num[1]);
    let thirdN = Number(num[0]);



    for (let first = firstN; first > 0; first--) {
        for (let second = secondN; second > 0; second--) {
            for (let third = thirdN; third > 0; third--) {
                let result = first * second * third;
                console.log(`${first} * ${second} * ${third} = ${result};`);
                
            }
            
        }
        
    }

}
multiplingTable(["324"]);