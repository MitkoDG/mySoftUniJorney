function changes(input) {
    let index = 0;
    let k = Number(input[index++]);
    let l = Number(input[index++]);
    let m = Number(input[index++]);
    let n = Number(input[index++]);

    let isPossible = false;
    let currentcombination = 6;

    while (currentcombination > 0) {

        for (let start = k; start <= 8; start++) {
            for (let start12 = 9; start12 >= l; start12--) {
                for (let start2 = 8; start2 <= m; start2++) {
                    for (let start22 = 9; start22 >= n; start22--) {
                        currentcombination--;
                        console.log(`${start}${start12} + ${start2}${start22}`);
                        let firstN = `${start}${start12}`;
                        let secondN = `${start2}${start22}`;

                        if (firstN === secondN) {
                            break;
                        }

                        if ((start % 2 === 0 && start2 % 2 === 0) && (start12 % 2 !== 0 && start22 % 2 !== 0)) {
                            console.log(`${start}${start12} + ${start2}${start22}`);
                            isPossible = true;
                            break;
                        } else {//if ((start % 2 !== 0 && start2 % 2 !== 0) && (start12 % 2 === 0 && start22 % 2 === 0)) {
                            console.log("Cannot change the same player.");
                            isPossible = false;
                            break;
                        }
                    }
                    if (!isPossible) {
                        break;
                    }
                }
                if (!isPossible) {
                    break;
                }
            }
        }
    }

}
changes(["7", "6", "8", "5"]);


// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Text;
// using System.Threading.Tasks;

// namespace learning {
//     class Program {
//         static void Main(string[] args) {

//             int firstNumber = int.Parse(Console.ReadLine());
//             int secondNumber = int.Parse(Console.ReadLine());
//             int thirdNumber = int.Parse(Console.ReadLine());
//             int fourNumber = int.Parse(Console.ReadLine());

//             int currentCombination = 0;
//             while (currentCombination <= 6) {
//                 for (int K = firstNumber; K <= 8; K++)
//                 {

//                     for (int L = 9; L >= secondNumber; L--)
//                     {
//                         for (int M = thirdNumber; M <= 8; M++)
//                         {
//                             for (int N = 9; N >= fourNumber; N--)
//                             {


//                                 if (K == M && L == N && K % 2 == 0 && L % 2 != 0) {

//                                     Console.WriteLine("Cannot change the same player.");
//                                 }
//                                 else if (K % 2 == 0 && L % 2 != 0 && M % 2 == 0 && N % 2 != 0) {

                                    // Console.WriteLine($"{K}{ L} - {M}{N}");
//                                     currentCombination++;
//                                 }
//                             }


//                         }

//                     }
//                 }
//             }
//         }

//     }
// }