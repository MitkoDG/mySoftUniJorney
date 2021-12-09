function solve(input) {
    let arr = input.map(Number).sort((a,b) => a - b);
    let smallestSection = arr[0];
    const cubicYardsPerDay = 195;
    const cubicYardCost = 1900;

    let cubicYardsForEveryDay = [];
    while (30 - smallestSection !== 0) {
        let cubicYardsBuilt = 0;
        for (let section of arr) {
            if (section < 30) {
                cubicYardsBuilt += cubicYardsPerDay;
                arr.splice(arr.indexOf(section), 1, section + 1);
            }
        }
        smallestSection = arr[0];
        cubicYardsForEveryDay.push(cubicYardsBuilt);
    }

    console.log(cubicYardsForEveryDay.join(', '));
    console.log(`${cubicYardsForEveryDay.reduce((sum, el) => sum + (el * cubicYardCost), 0)} pesos`);
}

solve(['21', '25', '28']);
solve(['17']);
solve(['17', '22', '17', '19', '17']);