function bombs(sequence, bomb) {
  let specialNumber = bomb[0];
  let bombPower = bomb[1];

  while (sequence.includes(specialNumber)) {
    let index = sequence.indexOf(specialNumber);
    let elementsToRemove = bombPower * 2 + 1;
    let startIndex = index - bombPower;

    if (startIndex < 0) {
      elementsToRemove += startIndex;
      startIndex = 0;
    }
    sequence.splice(startIndex, elementsToRemove);
  }

  let finalResult = sequence.reduce((a, b) => {
    return a + b;
  }, 0);
  console.log(finalResult);
}
bombs([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);

// ---------------------------

function solve(nums, [target, power]) {
  while (nums.includes(target)) {
    const targetIdx = nums.indexOf(target);

    nums = nums.filter((el, idx) => {
      return idx < targetIdx - power || idx > targetIdx + power;
    });
  }

  const result = nums.reduce((aggr, val) => aggr + val, 0);
  console.log(result);
}
solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
