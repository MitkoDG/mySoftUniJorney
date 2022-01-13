function greatestCD(firstNumber, secondNumber) {
     
    while (firstNumber !== secondNumber) {
        
        if (firstNumber > secondNumber) {
            firstNumber-= secondNumber
        } else {
            secondNumber -= firstNumber
        }
    }
    console.log(firstNumber);
 }
 greatestCD(15, 5)

//  function greatestCDD() {
   
//     let inputA=+document.getElementById("num1").value;
//     let inputB=+document.getElementById("num2").value;
//     let resultDiv=document.getElementById("result");
    
//        a = Math.abs(inputA);
//        b = Math.abs(inputB);
//        let divisor=GetDivisor(a,b);
     
//        resultDiv.textContent=divisor;
  
//        function GetDivisor(a,b){
            
//        if (b > a) {var temp = a; a = b; b = temp;}
//        while (true) {
//            if (b == 0) return  a;
//            a %= b;
//            if (a == 0) return b;          
//            b %= a;
           
//        }  
//     }
//  }
//  greatestCDD(15, 5)


 function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  
  console.log(gcd_two_numbers(12, 13));
  console.log(gcd_two_numbers(9, 3));
  