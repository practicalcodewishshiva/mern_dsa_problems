// // Q1: print numbers form 0 to 10

// // Brute force solution

// // console.log(0)
// // console.log(1)
// // console.log(10)

// // best appaorach
//             //   0           4
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//                     //  4 < 10 true or false
// // for (let index = 0; index < nums.length; index++) {
// //  console.log(nums[index])
// // }

//         // copyOfNums       array
// for (let c of nums){
//     console.log(c)
// }

// Q2: PRINT ALL EVEN NUMBERS BETWEEN 1 AND 10

// const nums = [1,2,3,4,5,100]
// // 1 --- 100

// for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     console.log(element)
// }

// Psedudo code

// for i=1 to 100

// 1 2 3 4 ...     100

// if indexValue % 2 ===0
// console.log(print even numbers)
// else console.log("odd numbers ")

// 2)100(50
//   100
//   0  reminder

// for (let copyOfNums of nums) {
//   if (copyOfNums % 2 === 0) {
//     console.log(copyOfNums);
//   }
// }

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < nums.length; index++) {
//   const element = nums[index];

//   if (element % 2 === 0) {
//     console.log(element);
//   }
// }

// Q3 PRINT ODD NUMBERS

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < nums.length; index++) {
//   const element = nums[index];

//   if (element % 2 !== 0) {
//     console.log(element);
//   }
// }

// Q4: Reverse (10 to 1)

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Psudo code
// // for i=10 to 0
// // 10>0
// // 10>1
// // 10>2
// // 10>3
// // print
//                                     //  10>=1 true or false
//                                     // 10>=10
// for (let indexValue = 10; indexValue >= 1; indexValue--) {
//   console.log(indexValue);
// }

// Q5 CREATE A TABLE

// Psudo code

// read nums

// for i= 1 2 3 4 to 10

// nums*index

// 2*2 =4
// 2*4 = 6
// 2*6 = 12
// 2*10 = 20

// const nums = 2;

// for (let index = 1; index < 10; index++) {
//   // console.log(index)
//   console.log(`${nums}  % ${index} = ${nums % index}`);
// }

// // concationatio a ' ' +  b + ' '

// // 2 * 2 = 4

// Sum of even

// n =5

// psudo code

// read n = 5

// loop 1 to 5

// if(i%2===0){
//     sum add chesta
// } else {
//     sum add cheyanu
// }

const nums = 6;
let sum = 0;
for (let index = 0; index < nums; index++) {
  //    0    % 2 ===0
  //    1   % 2===0
  //    2.  % 2 ===0 2
  //    3.  % 2===0 odd number
  //    4.  % 2 ===0
  if (index % 2 === 0) {
    sum += index;
    console.log(sum);
  }
}

// 5+ 0 = 5
// 5+2 = 7
// 5+4 = 9

// 5 7 9

const n = [1, 2, 3, 4, 5];
for (let i = 0; i < n.length; i++) {
  if (n % 2 === 0) {
  }
}

// even or odd single values set valaues tho ela calucaute

// loop even or odd check chesta loop
// if condition add cheyu
