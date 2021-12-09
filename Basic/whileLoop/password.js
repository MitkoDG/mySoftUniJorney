function password(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
    let command = input[index];
    

     while (command !== password) {
         command = input[index];
         
         if (command == password) {
             break;
         }
         index++;
     }
     console.log(`Welcome ${username}!`);

}
password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"]);