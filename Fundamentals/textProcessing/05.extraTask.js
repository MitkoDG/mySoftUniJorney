function occur(text, str) {
  let newText = text;
  let count = 0;

  while (newText.includes(str)) {
    count++;
    newText = newText.replace(str, ".".repeat(str.length));
  }
  console.log(count);
  console.log(newText);
}
occur("This is what we are looking for", "is");
