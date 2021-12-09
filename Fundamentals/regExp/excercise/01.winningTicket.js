function winningTicket(input) {
    let pattern = /(@{6,10}|#{6,10}|\${6,10}|\^{6,10})/;
    let arr = input.split(/[, ]+/g);
  
    for (let ticket of arr) {
      let firstHalf = ticket.slice(0, ticket.length / 2);
      let secondHalf = ticket.slice(ticket.length / 2);
      if (ticket.length === 20) {
        if (firstHalf.match(pattern) !== null || secondHalf.match(pattern) !== null) {
          if (firstHalf.match(pattern)[0] === secondHalf.match(pattern)[0]) {
              if (firstHalf.match(pattern)[0].length == 10) {
                  console.log(`ticket "${ticket}" - ${firstHalf.match(pattern)[0].length}${firstHalf.match(pattern)[0][0]} Jackpot!`); 
              } else if (firstHalf.match(pattern)[0].length < 10){
                  console.log(`ticket "${ticket}" - ${firstHalf.match(pattern)[0].length}${firstHalf.match(pattern)[0][0]}`); 
              } else {
                  console.log(`ticket "${ticket}" - no match`);
              }
             
          }
        } else {
            console.log(`ticket "${ticket}" - no match`);
        }
      } else {
        console.log("invalid ticket");
      }
    }
  }
winningTicket('Cash$$$$$$Ca$$$$$$sh')
winningTicket("$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey");
winningTicket("validticketnomatch:(")
