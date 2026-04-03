// // let  n = 357

// // // applePrice = 3
// // // bananaPrice = 5
// // // Pineappleprice = 7

// // console.log(n%10)

// // n/10 % 10

// // 10)357(35
// //    30
// //      57
// //      50
// //      7

// // 10)35(3
// //     30
// // 5. --- reminder

// // Patterns
// // n%10 last digit
// // n/10 % 10 middle elvel element
// // n/100 first gdigit

// // const n = 85.745645645645

// // console.log(Math.floor(n))

// // 3 5 7 all digits are distrint?

// // psudo code
// // const n = 111;

// // last    7.  n%10
// // middle 5.   n/10 % 10
// // first  3.   n/100

// //   3.         5

// // console.log(
// //   "firstDigit",
// //   firstDigit,
// //   "secondDigit",
// //   secondDigit,
// //   "lastDigit",
// //   lastDigit,
// // );

// // function checkDistinct(n) {
// //   if (
// //     firstDigit !== secondDigit &&
// //     secondDigit !== lastDigit &&
// //     firstDigit !== lastDigit
// //   ) {
// //     console.log("All digits ate distince");
// //   } else {
// //     console.log("Digits are not all distinct");
// //   }
// // }

// // checkDistinct(n);

// // 2

// // 363 found duplicate value

// // 367 not found any duplicate value

// // q2 middle digit : Largest/ Smallest/ neither

// // const n = 352

// // 5>3 5 >2  2<5 2<3 2<3 2>3 2<5

// // if(condition met){
// //     this is largest value
// // } else if(smaller){
// //     this is smallest valuye
// // } else{
// //     neither
// // }

// const n = 357;
// const firstDigit = Math.floor(n / 100);
// const secondDigit = Math.floor(n / 10) % 10;
// const lastDigit = n % 10;

// function checkMiddleDigit(n) {
//     //    5      >     3 ?  true or false
//     // true. &&                    5       > 7 ? true or false  true and false = false
//                                                                 // true true --- true
//                                                                 // false true ---- false
//   if (secondDigit > firstDigit && secondDigit > lastDigit) {
//     console.log("middle number is largest");
//             //   5           < 3 chinada pdedda?   &&   5 < 7 true. false true --- false
//   } else if (secondDigit < firstDigit && secondDigit < lastDigit) {
//     console.log("middle number is smallest");
//   } else{
//     console.log("neither")
//   }
// }
// checkMiddleDigit(n);

// first and last digits are Equal?

// const firstDigit = Math.floor(n / 100);
// const lastDigit = n % 10;
// if(firstDigit===lastDigit) return both are equal
// incase avaledhu - both are not equal

const n = 545;

const firstDigit = Math.floor(n / 100); // 5
const lastDigit = n % 10; // 1

// 5===1. not equal

function bothNumbersEqaulOrNot() {
  if (firstDigit === lastDigit) {
    console.log("first and last digits are eqal", );
  } else{
     console.log("first and last digits are not eqal", );
  }
}

console.log(bothNumbersEqaulOrNot());
