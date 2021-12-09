function ageGender(input) {

    let age = Number(input[0]);
    let gender = input[1];

    if ( gender === 'f') {
        if ( age < 16) {
            console.log('Miss');
        } else {
            console.log('Ms.');
        }
    } else if ( gender === 'm'){
        if (age < 16) {
            console.log('Master');
        } else{
            console.log('Mr.'); 
        }
    }
   

    //switch (num) {
     //   case 5:console.log('nah');break;
      //  case 6:console.log('boom');break;
       // case 7: console.log(7); break;
        //default: console.log(('Error!')); break;
    //}





}
ageGender('12', 'f');