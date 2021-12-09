function heartDelivery(info) {
    let arr = info.shift().split("@").map(Number)
    let position = 0
    let count = 0
    let lenght = arr.length

    for (const line of info) {
        let command = line.split(" ");
        let jump = +command[1];

        if (line === "Love!") {
            break;
        }
        if (position + jump < lenght) {
            position = position + jump
            let index = position
            if (arr[index] === 0) {
                console.log(`Place ${index} already had Valentine's day.`)
            }
            else if (arr[index] !== 0) {
                arr[index] -= 2
                if (arr[index] === 0) {
                    console.log(`Place ${index} has Valentine's day.`)
                }
            }
        }
        else if (position + jump >= lenght) {
            position = 0

            if (arr[0] === 0) {
                console.log(`Place ${position} already had Valentine's day.`)
            }
            else if (arr[0] !== 0) {
                arr[0] -= 2
                if (arr[0] === 0) {
                    console.log(`Place ${position} has Valentine's day.`)
                }
            }
        }
    }
    console.log(`Cupid's last position was ${position}.`)
    for (const num of arr) {
        if (num !== 0) {
            count++
        }
    }
    if (count !== 0) {
        console.log(`Cupid has failed ${count} places.`)
    }
    else {
        console.log("Mission was successful.")
    }
}

//---------------------------

function solve(input) {
 
 
    let houses = input.shift().split("@").map(Number)
    let index = 0;
    input.pop();
 
 
    for (let line of input) {
        
 
        let step = Number(line.split(" ")[1])
        index += step

 
 
        if (index >= houses.length) {
            index = 0;
        } if (houses[index] == 0) {
            console.log(`Place ${index} already had Valentine's day.`)
        } else {
            houses[index] -= 2
            if (houses[index] == 0) {
                console.log(`Place ${index} has Valentine's day.`)
            }
        }
 
    }
 
 
    console.log(`Cupid's last position was ${index}.`)
    let missed = houses.filter(x => x > 0).length;
    if (missed == 0) {
        console.log(`Mission was successful.`)
    } else { console.log(`Cupid has failed ${missed} places.`) }
 
}