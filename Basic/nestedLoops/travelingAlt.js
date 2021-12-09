function traveling(input) {
 
    let index = 0;
    let command = input[index];
    index++;
    let budget = input[index];
    index++
 
    while (command !== "End") {
        let destination = command;
 
        while (budget > 0) {
            let money = Number(input[index]);
            budget -= money;
            index++;
        }
 
        console.log(`Going to ${command}!`);
 
        command = input[index];
        index++;
        budget = Number(input[index]);
        index++;
    }
}
// ----------------------------------------------------------

// function traveling(input) {

//     let index = 0;
//     let command = input[index];
//     index++


//     while (command !== "End") {
//         let destination = command
//         let minBudget = Number(input[index]);
//         index++
//         let savedSums = Number(input[index])
//         index++
//         let savedMoneyCounter = 0;
       
        
//         while(savedMoneyCounter < minBudget){
//             savedMoneyCounter += savedSums
//             if(savedMoneyCounter >= minBudget){
//                 console.log(`Going to ${destination}!`);
//                 break;
//             }
//             savedSums = Number(input[index]);
//             index++
//         }
//         command = input[index];
//         index++
        
//     } 

// }
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"]);