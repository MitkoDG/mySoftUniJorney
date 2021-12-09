function printCertificate(grade, names) {
  let fullName = getFullName(names[0], names[1]);
  if (grade < 3) {
    console.log(`${fullName} does not qualify`);
  } else {
    printHeader();
    console.log(fullName);
    formatGrade(grade);
  }
}
printCertificate(2.99, ["A", "B"]);
printCertificate(5.99, ["C", "D"]);

function printHeader() {
  console.log("~~~~~~~header~~~~~~~");
  console.log("~~~~~Certificate~~~~~");
}
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
function formatGrade(grade) {
  if (grade < 3.0) {
    console.log("Fail (2)");
  } else if (grade < 3.5) {
    console.log(`Poor ${grade.toFixed(2)}`);
  } else if (grade < 4.5) {
    console.log(`Good ${grade.toFixed(2)}`);
  } else if (grade < 5.5) {
    console.log(`Very good ${grade.toFixed(2)}`);
  } else {
    console.log(`Excellent ${grade.toFixed(2)}`);
  }
}
