function advancedFuntions(input) {
    // console.log(arguments);

    let data = {};

    Array.from(arguments).forEach((x) =>{
        let type = typeof(x);
        console.log(`${type}: ${x}`);

        if (!data[type]) {
            data[type] = 0;

        }
        data[type]++
    })

    let sorted = Object.keys(data)
    // console.log(sorted);
    .sort((a,b) => data[b] - data[a])
    .forEach((key)=>console.log(`${key} = ${data[key]}`));

    // for (const type in data) {
    //     console.log(`${type} = ${data[type]}`);
    // }




}
advancedFuntions('cat', 42, function () { console.log('Hello world!'); })