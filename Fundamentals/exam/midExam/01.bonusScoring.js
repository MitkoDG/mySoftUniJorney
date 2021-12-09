function solve(input) {
    let studentCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());
    let students = input.map(x => Number(x))
    let maxBonus = 0
    let maxLectures = 0

    for (let i = 0; i < studentCount; i++) {
        let currentLectureCount = students[i]
        let currentBonus = currentLectureCount / lecturesCount * (5 + initialBonus)
        if (currentBonus > maxBonus) {
            maxBonus = currentBonus
            maxLectures = currentLectureCount
        }
    }

    maxBonus = Math.ceil(maxBonus)
    console.log(`Max Bonus: ${maxBonus}`);
    console.log(`The student has attended ${maxLectures} lectures.`);


}
solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  )
  solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  )