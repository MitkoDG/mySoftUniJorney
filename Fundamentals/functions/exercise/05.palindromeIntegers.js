function palindrome(arr) {
  let arrL = arr.length;

  let isPalindrome = (num) => {
    //123.join(') == '123'.split('')
    let startNum = num;
    let reversedNum = Number(num.toString().split("").reverse().join(""));
    
    if(startNum === reversedNum) {
        return 'true'
    } else {
        return 'false'
    }
  };

  for (let i = 0; i < arrL; i++) {
    let currentNumber = arr[i];
    console.log(isPalindrome(currentNumber));
  }
}
palindrome([123, 323, 421, 121]);
