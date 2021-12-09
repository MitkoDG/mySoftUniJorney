function arraysIntro(){

    let arrOfNumbers = [12, 23, 44, 55];
    //          index   0   1   2   3
    let separator = ''
    let result = arrOfNumbers.join(separator)
    console.log(result);

    // let arrLength = arrOfNumbers.length;
    // let lastElement = arrOfNumbers[arrLength-1]

    // console.log(lastElement);

    // let arrOf5 = [1];
    // arrOf5[1] = 10;
    // arrOf5[10] = 6;
    // console.log(arrOf5);
    // console.log(arrOf5[10]);
    // let arrLength5 = arrOf5.length; // взимай винаги дължината на масива в променлива

    // arrOf5.push(100)

    // let isAvailable = arrOf5.includes(10);
    // console.log(isAvailable);



    // for ( let element of arrOf5 ) {
    //     console.log(element);
    // }
    

    // for (let index = 0; index < arrLength5; index++) {
    //     console.log(arrOf5[index]);
        
    // }

}
arraysIntro()


function exam(input) {

    let wordToReverse = input[0];
    let wordAsArray = wordToReverse.split('')
    let reversedArray = wordAsArray.reverse();
    let finalResult = reversedArray.join('');
    console.log(finalResult);
}
exam(['Hello'])
exam(['DiMiTaR']);