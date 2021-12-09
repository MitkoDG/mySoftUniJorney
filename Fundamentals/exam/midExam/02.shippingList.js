function list(params) {

    let listOfProducts = params[0].split("!");
    let index = 1;
    let currentTask = params[index];
    while (currentTask !== "Go Shopping!") {
        currentTask = currentTask.split(" ");
        let key = currentTask[0];
        let item = currentTask[1];
        let newItem = currentTask[2];
        switch (key) {
            case "Urgent":
                if (listOfProducts.includes(item) === false) {
                    listOfProducts.unshift(item);
                }
                break;
            case "Unnecessary":
                if (listOfProducts.includes(item) === true) {
                    let indexOfRemoved = listOfProducts.indexOf(item);
                    listOfProducts.splice(indexOfRemoved, 1);
                }
                break;
            case "Rearrange":
                if (listOfProducts.includes(item) === true) {
                    let indexOfRearanged = listOfProducts.indexOf(item);
                    listOfProducts.splice(indexOfRearanged, 1);
                    listOfProducts.push(item);
                }
                break;
            case "Correct":
                if (listOfProducts.includes(item) === true) {
                    let indexOfOld = listOfProducts.indexOf(item);
              listOfProducts[indexOfOld] = newItem;
                }
                break;
        }
        index++;
        currentTask = params[index];
    }
    console.log(listOfProducts.join(", "))


}
list(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

// Input
// You will receive an initial list with groceries separated by an exclamation mark "!".
// After that, you will be receiving 4 types of commands until you receive "Go Shopping!".
// •	"Urgent {item}" - add the item at the start of the list.  If the item already exists, skip this command.
// •	"Unnecessary {item}" - remove the item with the given name, only if it exists in the list. Otherwise, skip this command.
// •	"Correct {oldItem} {newItem}" - if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
// •	"Rearrange {item}" - if the grocery exists in the list, remove it from its current position and add it at the end of the list. Otherwise, skip this command.
// Constraints
// •	There won't be any duplicate items in the initial list
