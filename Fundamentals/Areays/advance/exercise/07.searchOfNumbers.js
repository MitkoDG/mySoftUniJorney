function sort(collection, numbers) {

    let elementsToCut = numbers[0]
    let elementsToDel = numbers[1]
    let elementsToFind = numbers[2]
    let modifiedArr = collection.slice(0,elementsToCut);
    modifiedArr.splice(0,elementsToDel);

    let counter = 0;
    let modifiedArrL = modifiedArr.length
    for (let i = 0; i < modifiedArrL; i++) {
        if(elementsToFind === modifiedArr[i]){
            counter++;
        }
        
    }


    console.log(`Number ${elementsToFind} occurs ${counter} times.`);
}
sort([5, 2, 3, 4, 1, 6], [5, 2, 3]);
