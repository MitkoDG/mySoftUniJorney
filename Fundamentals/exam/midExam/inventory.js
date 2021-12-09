function inventory(input) {
    let collectables = input.shift().split(", ");
  
  
    for (commands of input) {
      let command = commands.split(" - ");
  
      if (command[0] === "Collect") {
        if (!collectables.includes(command[1])) {
          collectables.push(command[1]);
        }
      } else if (command[0] === "Drop") {
        if (collectables.includes(command[1])) {
          collectables.splice(collectables.indexOf(command[1]),1);
        }
      } else if (command[0] === "Combine Items") {
        let seperate = command[1].split(":");
        let oldItem = seperate[0];
        let newItem = seperate[1];
  
        if (collectables.includes(oldItem)) {
          collectables.splice(collectables.indexOf(oldItem)+ 1,0,newItem);
        }
      } else if (command[0] === "Renew") {
        if (collectables.includes(command[1])) {
          collectables.splice(collectables.indexOf(command[1]), 1);
          collectables.push(command[1]);
        }
      } else {
        console.log(collectables.join(", "));
      }
    }
  }
  