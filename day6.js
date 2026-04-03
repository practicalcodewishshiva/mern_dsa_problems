// // // sort

// // arr = [1, 2, 4, 7, 7, 5]

// // // const sortetArry = ["indigo", "airIndia", "deccan",]
// // // const  secondSmallest = sortetArry[1]
// // // const largestElement = sortetArry[sortetArry-2]

// // // time complexity n log n

// // // order assceding order or decending order

// // // 1 3 5 6 7 sorting assecdign order

// // // 7 65 4 32 2

// // // second appraoch
// // two pointers approach

// // 1st point array loop chestam 1 pointer

// // 2nd point ah vachind loop valie conditioanl check cheso valuens find out

// // Infinity

// // -Infinity -10000000000, -3,-2,-1[1, 2, 4, 7, 7, 5]-----------500 500000 10000000000000 +Infinity

// // Find Second Smallest and Second Largest Element in an array

// // 43

// // Problem Statement: Given an array, find the second smallest and second largest element in the array.
// // Print ‘-1’ in the event that either of them doesn’t exist.

// // Psudo code
// //  read input
// //  constraints values 10 100 1000 100000 1 lackarra

// //  array

// //  smallest findout cheyali

// //  secondLarest findout cheyali

// //  largest ?
// //  secondLarest?

// //  for looop

// //  array data

// //  if (nums < smallest)
// //     nums > smallest && nums >largest
// // if condition met ayyare return valid solitiion

// // 0(n)

// // js code

// const nums = [3, 6, 7, 8, 9, 1];
// // second smallest and second largest
// function findtheSmallestandSecondLargest(nums) {
//   let smallestValue = Infinity;
//   let largestValue = -Infinity;

//   let secondSmallest = Infinity;

//   let secondLargestValue = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < smallestValue) {
//       secondSmallest = smallestValue;
//       smallestValue = nums[i];
//     } else if (nums[i] < secondSmallest && nums[i] !== smallestValue) {
//       secondSmallest = nums[i];
//     }

//     if (nums[i] > largestValue) {
//       secondLargestValue = largestValue;
//       largestValue = nums[i];
//     } else if (nums[i] > secondLargestValue && nums[i] !== largestValue) {
//       secondLargestValue = nums[i];
//     }
//   }

//   console.log(secondSmallest, secondLargestValue);
// }

// findtheSmallestandSecondLargest(nums);

// // Found smallest value
// // largest value ?

// // smallest value and secondsmallest value found 1st scmeario

// // second value and secondLargest value kavlai?

// // comapraiosn table chinnada ? pedda  > <

// // arr[] = {5,4,3,2,1}

// // 1,2,3,4,5

// // input read

// // Constraints:

// // 1 <= arr.length <= 105

// // 1 <= arr.length <= 100000 1 lack users

// // psudo code

// // loop

// // arr[0]
// // arr[n-1]

// // swap

// // if(arr[i]===confi){
// //     reutne valid
// //     swap
// //     starting value to end valu swap
// // }

// const arr = [5, 4, 3, 2, 1];

// function reverseAnData(arr){
//     startingValue = arr[0];
//     endIngValue =arr.length - 1;

//     let swapping = startingValue;
//     while(startingValue < endIngValue){
//         arr[startingValue] = arr[endIngValue]
//         arr[endIngValue] = arr[startingValue]

//         startingValue++
//         endIngValue--

//     }

// }

// reverseAnData(arr)

// // if conditon vs while

const arr = [4,7,8,9,3,2];


function reverseAnData(arr) {
  let startingValue = 0;
  let endIngValue = arr.length - 1;
 0 <  4
  while (startingValue < endIngValue) {
    // [4,7,8,9,3,2][0]
    let swapping = arr[startingValue];
    // arr[0] = 4.     = arr[]
    //  index values and same values 
    // 0 index 4 value and index value is 5 and value 2

    arr[startingValue] = arr[endIngValue];
    arr[endIngValue] = swapping;

    startingValue++;
    endIngValue--;

   
  }
  console.log(arr);
}

// 5 1
// 1 5
reverseAnData(arr);

// if conditon vs while

// 5 < 1 true false
// 0 < 1 true or false
