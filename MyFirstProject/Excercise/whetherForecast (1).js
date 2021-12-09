function whetherForecast(input) {
    let whether = (input[0]);
    
    if ( whether === `sunny` ) {
       console.log(`It's warm outside!`);
        } else { 
            console.log(`It's cold outside!`)
    }
}
    whetherForecast(['cold']);