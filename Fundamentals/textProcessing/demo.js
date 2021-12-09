function solve(text, number) {
    let trimmedText = text.substring(0,number)
    let placeToStop = 0
    for (let i = trimmedText.length-2; i >= 0; i--) {
        if (trimmedText[i] === " ") {
            placeToStop = i
            break;
        }
        
    }
    let finalText = trimmedText
    .substring(0, placeToStop)
    .padEnd(number, ".")
    
    console.log(finalText);
}
solve("asdjkg kjasg kjashg kjahsgk haskjg haksjg kjasdhg kja", 20)