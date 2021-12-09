function solve(input) {//100/100;

    const pattern = /(\@|\#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    const letters = /([A-Za-z]{3,})/g;
    const line = input.shift();
    const matched = line.match(pattern);
    let validWords = [];
    if (matched == null) {
        console.log("No word pairs found!");
    } else {
        console.log(`${matched.length} word pairs found!`);
        for (let el of matched) {
            let words = el.match(letters);//this way we capture only the letters without the symbols
            let reversedWord = words[1].split("").reverse().join("");

            if (words[0] === reversedWord) {//if both left and right word(reversed) match
                validWords.push(words.join(" <=> "));
            }
        }
    }
    !validWords.length//if the length is 0 or if there is no length
        ? console.log("No mirror words!")
        : console.log(`The mirror words are:\n ${validWords.join(", ")}`);
}
// solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])
// solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])