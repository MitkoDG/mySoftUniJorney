function listNames(input) {
    let sorted = input.sort((a, b) => a.localeCompare(b));

    for (const name of sorted) {
        console.log(`${sorted.indexOf(name) + 1}.${name}`);
    }

    
}
listNames(["John", "Bob", "Christina", "Ema"])