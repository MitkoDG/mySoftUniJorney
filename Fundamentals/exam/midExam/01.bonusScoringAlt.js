function solve(input) {
  let studentCount = Number(input.shift());
  let lecturesCount = Number(input.shift());
  let initialBonus = Number(input.shift());
  let students = input.map((x) => Number(x));

  students = students.sort((a, b) => b - a);
  let maxLectures = students.shift();
  let maxBonus = 0;

  maxBonus = (maxLectures / lecturesCount) * (5 + initialBonus);
  maxBonus = Math.ceil(maxBonus);

  if (maxBonus > 0) {
    console.log(`Max Bonus: ${maxBonus}`);
    console.log(`The student has attended ${maxLectures} lectures.`);
  } else {
    console.log(`Max Bonus: 0`);
    console.log(`The student has attended 0 lectures.`);
  }
}
solve(["5", "25", "30", "12", "19", "24", "16", "20"]);
