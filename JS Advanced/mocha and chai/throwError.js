function getNumber() {
  let randomNumber = Math.random();

  if (randomNumber < 0.5) {
    throw new Error("Your Number is too low");
  }

  return Math.floor(randomNumber * 100);
}
let num = getNumber();
console.log(num);

function app() {
  try { // if there is a error do this
    let number = getNumber();
    console.log(number);
  } catch (err) { // if not do that
    console.log(err.stack);
  }
}
app()
