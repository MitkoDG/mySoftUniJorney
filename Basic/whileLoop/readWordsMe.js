function readWords(input) {
    let index = 0;
    let word = input[index];


    while (word !== 'Stop') {
        let currentWord = input[index];
        index++;
        if (currentWord === 'Stop') {
            break;
        }
        console.log(currentWord);
    }
    

}
readWords(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
