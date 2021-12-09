function activation(input) {
    let activationKey = input.shift()

    for (let key of input) {
        let nextKey = key.split('>>>')
        let command = nextKey.shift()

        switch (command) {
            case 'Slice':
                
                cutString = activationKey.splice(nextKey.shift(), nextKey.shift())
                console.log(activationKey);
                console.log(cutString);
                break;

                
        }
        command = input.shift()
    }


    // while (command === 'Generate') {

    // }
}
activation(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])

// •	"Contains>>>{substring}":
// o	If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".
// o	Otherwise, prints: "Substring not found!"
// •	"Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
// o	Changes the substring between the given indices (the end index is exclusive) to upper or lower case and then prints the activation key.
// o	All given indexes will be valid.
// •	"Slice>>>{startIndex}>>>{endIndex}":
// o	Deletes the characters between the start and end indices (the end index is exclusive) and prints the activation key.
// o	Both indices will be valid.

// activation(["134softsf5ftuni2020rockz42",
// "Slice>>>3>>>7",
// "Contains>>>-rock",
// "Contains>>>-uni-",
// "Contains>>>-rocks",
// "Flip>>>Upper>>>2>>>8",
// "Flip>>>Lower>>>5>>>11",
// "Generate"])