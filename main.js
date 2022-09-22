// n! = n * (n - 1) * (n - 2) * ... (1)
// 5! = 5 * 4 * 3 * 2 * 1


// function calcFact(number) {
//     for (let i = number - 1; i >= 1; i--) {
//         number *= i;
//     }
//     return number;
// }

// console.log(calcFact(5));

// function calcFact(number){
//     for (let i = number - 1; i >= 1; i--){
//         number*=i;
//     }
//     return number;
// }
// console.log(calcFact(5));

// n! = n * (n - 1)!
const calcFact = (number) => {
    if (number === 1){
        return 1
    } else {
        return number * calcFact(number - 1);
    }
}

console.log(calcFact(5));