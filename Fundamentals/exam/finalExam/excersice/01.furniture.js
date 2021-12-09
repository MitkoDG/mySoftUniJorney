function furnitureTask(input) {
    let pattern = /^>>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)$/
    let totalSpend = 0;
    let furnitureNames = []
    
    while (input[0]!='Purchase') {
        let line = input.shift()
        let match = pattern.exec(line)
        if (match != null) {
            let {name, price, qty} = match.groups
            price = +price
            qty = +qty
            totalSpend+= price * qty
            furnitureNames.push(name)
        }
    }

    // index.pop()


    // for (let line of index) {
    //     if (pattern.test(line)) {
    //         let splited = line.match(pattern)
    //         let furniture = splited[1]
    //         let price = +splited[2]
    //         let qty = +splited[3]
    //         totalSpend += price*qty
    //         furnitureNames.push(furniture)
    //     } 
    // }
    console.log("Bought furniture:");
    console.log(furnitureNames.join('\n'));
    console.log(`Total money spend: ${totalSpend.toFixed(2)}`);

}
furnitureTask(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)
