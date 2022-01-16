// function extractSubsequence(input) {
//   let result = [];
//   let highest = input[0];
//   for (const num of input) {
//     if (num >= highest) {
//       highest = num;
//       result.push(num);
//     }
//   }
  
//   return result

// }
// extractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);

// using reduce

function extract(arr) {

    let result = arr.reduce((acc, el) => {
        let accL = acc.length; // дължината на масива acc (акумулатора в reduce), взета в променлива;
        if (!accL) { // тук проверяваме чрез boolean дали accL има стойност, ако няма, връща false и не позволява достъпването на кода в проверката. връща falsy стойност;
            acc.push(el);
        } else if (el >= acc[accL - 1]) {
            acc.push(el);
        }
        return acc;
    }, [])
    console.log(result);
}
extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);