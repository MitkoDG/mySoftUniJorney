function specialNumbers(data){
    let num = Number(data[0]);
 
    let str = "";
    let n = "";
    let isMagic = true;
 
    for(i = 1111; i <= 9999; i++){
        n = i.toString();
        for(j = 0; j < 4; j++){
            if(num % n[j] !== 0){
                isMagic = false;
                break;
            }
        }
        if(isMagic === true){
            str += n + " ";
        }
        isMagic = true;
        n = "";
    }
 
    console.log(str);
}
specialNumbers(["3"]);