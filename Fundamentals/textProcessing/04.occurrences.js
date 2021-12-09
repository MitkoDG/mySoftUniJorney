function occur(text, word) {
    let textArr = text.split(" ");
    let counter = 0;
    for (let currWord of textArr) {
        if (currWord === word) {
            counter++
        }
    }
    console.log(counter);
}
occur('This is what we are looking for', 'is')