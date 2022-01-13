function greatestCD() {
   
    let inputA=+document.getElementById("num1").value;
    let inputB=+document.getElementById("num2").value;
    let resultDiv=document.getElementById("result");
    
       a = Math.abs(inputA);
       b = Math.abs(inputB);
       let divisor=GetDivisor(a,b);
     
       resultDiv.textContent=divisor;
  
       function GetDivisor(a,b){
            
       if (b > a) {var temp = a; a = b; b = temp;}
       while (true) {
           if (b == 0) return  a;
           a %= b;
           if (a == 0) return b;          
           b %= a;
           
       }  
    }
 }
 greatestCD(15, 5)