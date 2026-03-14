// // // q1: number posive or negetive ? even or add

// // // Steps to resolve the issue

// // // input

// // // function
// // // output

// // // psudo code

// // // acutal code like js
// // // negetive ----
// // // positive +
// // const input = 0;

// // // Psudo code

// // // if input > 0
// // // prinrt "this is pposotive number"
// // // else
// // //     print "this is negitive number "

// // function checkPositveOrNegetive(input) {
// //   if (input > 0) {
// //     console.log("Positive Number");
// //   } else if (input < 0) {
// //     console.log("Negetive Number");
// //   } else {
// //     console.log("Zero")
// //   }
// // }

// // checkPositveOrNegetive(input);

// // q2: check number even or odd
// // % 2 divide ayithe naku zero vaste even number
// //  % 2 divide cheste naku 1 2 7 vaste odd number

// // input % 2 ===0
// // this is even number

// // input % 2 === 1

// // this is odd number

// // const input = 3;

// // function checkEvenorOdd(input) {
// //   if (input % 2 === 0) {
// //     console.log("even number");
// //   } else if (input % 2 === 1) {
// //     console.log("odd number");
// //   } else if (input % 2 !== 0) {
// //     console.log("odd number");
// //   } else {
// //     console.log("no condition met");
// //   }
// // }

// // checkEvenorOdd(input);

// // q3. divisible by 5
// // Q4 divisble by 5 & 3

// const input = 20;

// function checkDivisibleByFive(input) {
//   if (input % 5 === 0) {
//     console.log("divisible by 5");
//   } else if(input % 3 === 0){
//     console.log("divisible by  3");
//   }
//   else {
//     console.log("not divisable by 5 & 3");
//   }
// }

// checkDivisibleByFive(input);

// // dry run code
// // 3)20(6
// //   18
// // 2
// //   0 zero divisible chestondi 5

// //   5)17(3
// //     15

// //     2

// // q6 find out which number is larger ?

// let a = 100;
// let b = 70;
// let c = 200
// larger ?
// // 100 > 70 true

// // 70 > 100 false

// function main() {
//   if (100 > 70) {
//     console.log("a is greater then b");
//   } else if (a < b) {
//     console.log("b is larger");
//   } else {
//     console.log("both are equal");
//   }
// }

// main()

// q8 AC ROOM tempature  22

// 18 cold ---

// 15 -- warm

// 25 --- hot

// const input = 10;

// if (input < 18) {
//   console.log("cold");
// } else if (input) {
//   console.log("warm");
// } else {
//   console.log("Hot");
// }

// comaprions
// Level 1 Operators && ||

// const name = "shiva"

// if(name ==="shiva" || name==="gangadhar"){
//     console.log("matched 2 people names")
// }

// Marks grade system 30 studnets 90% score a grade 50 % b grade 35 c grade  34 fail

// Psudo code input 100

// if marks < 95
// <50
// <35
// <34
// > 50
// >35
// >34
// morning afterrnoon evening
// const input = 24;
// const morningSession = "6am";
// const afternoonSession = "12pm";
// const eveningSession ="6pm";
// const nightSession= "9pm";
// // 0 -------- 6 ------ 12 ----- 18 ----- 21 ------ 24

// function checkGrade(input) {
//   if (input >= 6) {
//     console.log(" Grade A");
//   } else if (input >= 12) {
//     console.log(" Grade b");
//   } else if (input > 18) {
//     console.log(" Grade c");
//   } else if (input > 21) {
//     console.log("fail");
//   }
// }

// // >
// // ===
// // >=
// checkGrade(input);

// check both condition as even or odd or mixed

// let a = 10;
// let b = 13
// even check cheyali ? 2 ---- 0 even

// odd check cheya ? 2  --- odd   1 3
// even
// 2)7(3
//   6
//  1

let ProductA = 200;
let ProductB = 250;

// a and b

if (a % 2 === 0 && b % 2 === 0) {
  console.log("both conditions met a and b its even number");
} else if (a % 2 !== 0 && b % 2 !== 0) {
  console.log("Odd number");
} else {
  console.log("not even or odd value");
}
