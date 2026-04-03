const arr = [4,6,2,1,7,8,9];

// smallest value find out

let initialValue = arr[0]; //3

function findtheSmallest() {
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] < initialValue) {
      // ikkda nenu ipdaye cjesta
      initialValue = arr[index];
      console.log(initialValue);
    }

    return initialValue;
  }
}

console.log(findtheSmallest());

// 5 < 3;
// 6 < 3;
// 8 < 3;
// 9 < 3;
// 10 < 3;
// 4 < 3;
