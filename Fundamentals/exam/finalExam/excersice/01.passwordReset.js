function passwordReset(input) {
     let password = input.shift()

     let commandParser = {
         'TakeOdd':(password)=>{
            return [...password]
            .filter((symbol.index)=> index % 2 !== 0)
            .join("")
         },
         'Cut':()=>{

         },
         'Substitute':()=>{

         }
     }

     input.forEach(line => {
         if (line !== 'Done') {
             let [command,...tokens] = line.split(" ")
             let oldPassword = password;
             password =commandParser[command](password,...tokens)

         }
        //  console.log(line);
     });

}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])

/*passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])
*/

function solve(input) {
    let text = input.shift();
    while (input[0] !== "Done") {
      let [action, command1, command2] = input[0].split(" ");
   
      if (action === "TakeOdd") {
        let newText = "";
        for (let i = 0; i < text.length; i++) {
          if (i % 2 !== 0) {
            let ch = text[i];
            newText += ch;
          }
        }
        text = newText;
        console.log(text);
      } else if (action === "Cut") {
        let startIndex = Number(command1);
        let length = Number(command2);
        let endIndex = startIndex + length;
   
        let firstPart = text.slice(0, startIndex);
        let secondPart = text.slice(endIndex);
        text = firstPart + secondPart;
        console.log(text);
      } else if (action === "Substitute") {
        let substring = command1;
        let substitution = command2;
        if (text.includes(substring)) {
          while (text.includes(substring)) {
            text = text.replace(substring, substitution);
          }
          console.log(text);
        } else {
          console.log("Nothing to replace!");
        }
      }
   
      input.shift();
    }
    console.log(`Your password is: ${text}`);
  }
  solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done"])

  //alternative
  function passwordReset(input) {
    let operations = {
        TakeOdd,
        Cut,
        Substitute
    }

    let rawPassword = input.shift()

    while(input[0] != 'Done') {
        let tokens = input.shift().split(' ')
        let command = operations[tokens[0]]
        rawPassword = command(rawPassword,tokens[1],tokens[2])
       
    }

    console.log(`Your password is: ${rawPassword}`);

    function TakeOdd(text) {
        let result = '';
        for(let i = 1; i < text.length; i+= 2) {
            if(text[i] % 2 != 0) {
                result += text[i]
            }
        }
        console.log(result);
        return result
    }


    function Cut(text, start, count) {
        start = Number(start)
        count = Number(count)
        let word = text.substring(start, start + count)
        let result = text.replace(word, '')
        console.log(result);
        return result
    }
    

    function Substitute(text, match, word) {
        let result  = text.split(match).join(word)
        if(result === text) {
            console.log('Nothing to replace!');
        } else {
            console.log(result);
        }
        return result 
        
    }

}