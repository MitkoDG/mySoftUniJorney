function solve(input) {
    let sequence = input.shift().split(' ').map(Number);
    for (let line of input) {
        if (line === 'Finish') {
            break;
        }
        let [command, index1, index2] = line.split(' ')
        index1 = Number(index1);
        index2 = Number(index2)
        if (command == 'Add') {
            sequence.push(index1);
        } else if (command == 'Remove') {
            if (sequence.includes(index1)) {
                let foundIndex = sequence.indexOf(index1);
                sequence.splice(foundIndex, 1)
            }
        } else if (command == 'Replace') {
            if (sequence.includes(index1)) {
                let foundIndex = sequence.indexOf(index1);
                sequence.splice(foundIndex, 1, index2)

            }
        } else if (command == 'Collapse') {
            sequence = sequence.filter(x => x > index1)
        }

    }
    console.log(sequence.join(' '))
}
solve(["1 4 5 19",
"Add 1",
"Remove 4",
"Finish"])
solve(["1 20 -1 10",
"Collapse 8",
"Finish"])
solve(["5 9 70 -56 9 9",
"Replace 9 10",
"Remove 9",
"Finish"])