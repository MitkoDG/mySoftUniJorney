function goldMine(imput) {

    let locations = Number(imput[0]);
    let h = 1
    for (let i = 1; i <= locations; i++) {
        let neededgold = Number(imput[h++]);
        let days = Number(imput[h++])
        let collectedgold=Number(0)
        let result=Number(0)
        for(let j=1;j<=days;j++){
            let gold=Number(imput[h])
            collectedgold+=gold
           h++
        }
        result=collectedgold/days
         if(result >= neededgold){
             console.log(`Good job! Average gold per day: ${result.toFixed(2)}.`)
         }else if(result < neededgold){
             console.log(`You need ${(neededgold - result).toFixed(2)} gold.`)
         }
         
    }


}
goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"])