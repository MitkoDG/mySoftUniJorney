function solve(arr) {
    let newArr = []
    let arrL = arr.length
    // for (let i = 0; i < arrL; i++) {
    //     if (i % 2 !== 0) {
    //         let nextNum = arr[i] * 2
    //         newArr.push(nextNum)
    //     }
        
    // }
    // let newArrToStr = newArr.map(num => {return num.toString()})
    // newArrToStr.reverse();
    // let result = newArrToStr.map(Number)
    let resultF = lecture([10, 15, 20, 25])
    console.log(resultF);
    // console.log(result.join(" "));
}
solve([10, 15, 20, 25])

function lecture(arr) {
    let result = arr
      .filter((num, i) => i % 2 == 1)
      .map(x => 2*x)
      .reverse();
    return result.join(' ');
    
  }
  // lecture([])
  