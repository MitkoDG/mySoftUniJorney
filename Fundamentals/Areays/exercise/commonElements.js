function arraysIntro(firstArr, secondArr) {
    let firstArrL = firstArr.length;
    let secondArrL = secondArr.length

    for (let i = 0; i < firstArrL; i++) {
        let firstElement = firstArr[i]

        for (let j = 0; j < secondArrL; j++) {
            let secondElement = secondArr[j];

            if (firstElement === secondElement) {
                console.log(firstElement);
            }
        }
    }
}
arraysIntro(
    ["Hey", "hello", 2, 4, "Peter", "e"],
    ["Petar", 10, "hey", 4, "hello", "2"]
);
arraysIntro(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
)