function gladiatorInventory(equipment) {

    let inventar = equipment.shift().split(" ");

    function include(arr, item) {
        if (!arr.includes(item)) {
            arr.push(item)
        }
    }
    function trash(arr, item) {
        if (arr.includes(item)) {
            arr.splice(arr.indexOf(item), 1)
        }
    }
    function repair(arr, item) {
        if (arr.includes(item)) {
            arr.push(item)
            arr.splice(arr.indexOf(item), 1)
        }

    }
    function upgrade(arr, item) {
        let info = item.split("")
        let names = []
        for (let i = 0; i < info.length; i++) {
            if (info[i] === "-") {
                info[i] = " "
            }
            names += info[i]
        }
        let array = names.split(" ")
        if (arr.includes(array[0])) {
            arr.splice(arr.indexOf(array[0]) + 1, 0, `${array[0]}:${array[1]}`)
        }

    }

    for (const item of equipment) {
        let arr = item.split(" ")
        let command = arr[0]
        let subject = arr[1]
        if (command === "Buy") {
            include(inventar, subject)
        }
        else if (command === "Trash") {
            trash(inventar, subject)
        }
        else if (command === "Repair") {
            repair(inventar, subject)
        }
        else if (command === "Upgrade") {

            upgrade(inventar, subject)
        }
    }


    console.log(inventar.join(" "))

}
gladiatorInventory([`SWORD Shield Spear`, `Buy Bag`, "Trash Shield", "Repair Spear", "Upgrade SWORD-Steel"])