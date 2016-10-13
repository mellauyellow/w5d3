// function uniq(arr) {
//   let return_array = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!return_array.includes(arr[i])) {
//       return_array.push(arr[i]);
//     }
//   }
//   return return_array;
// }
//
// // console.log(uniq([1,1,1,2,3,4]));
//
// function twoSum(arr) {
//   let return_array = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return_array.push([i, j]);
//       }
//     }
//   }
//   return return_array;
// }
//
// // console.log(twoSum([-1, 0, 2, -2, 1]));
//
// function myTranspose(arr) {
//   let transposed_array = [];
//   for (let row = 0; row < arr.length; row++) {
//     let subarray = new Array(arr[0].length);
//     for (let col = 0; col < arr[0].length; col++) {
//       subarray[col] = (arr[col][row]);
//     }
//     transposed_array.push(subarray);
//   }
//   return transposed_array;
// }
//
// console.log(myTranspose([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]));
//
// function myEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
//   return arr;
// }
//
// // myEach([1, 2, 3], (el) => (console.log(el)));
//
// function myMap(arr, callback) {
//   let return_array = [];
//   myEach(arr, (el) => {
//     return_array.push(callback(el));
//   })
//   return return_array;
// }
// let integers = [1, 2, 3, 4];
// // console.log(myMap(integers, (el) => (el * el)));
//
// function myInject(arr, callback, accum) {
//
//   if (!accum && accum !== 0) {
//     arr = arr.slice(1);
//     accum = arr[0];
//   }
//
//   myEach(arr, (el) => {
//     accum = callback(el, accum);
//   })
//   return accum;
// }
//
// let nums = [1,2,3,4,5];
// console.log(myInject(nums, (el, accum) => (accum + el), 0))
//
// function bubbleSort(arr) {
//   let sorted = false;
//   while (sorted === false) {
//     sorted = true;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         sorted = false;
//         let placeholder = arr[i]
//         arr[i] = arr[i + 1];
//         arr[i + 1] = placeholder;
//       }
//     }
//   }
//   return arr;
// }
//
// console.log(bubbleSort([3, 5, 6, 2, 1]));

function substrings(string) {
  let subs = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      subs.push(string.slice(i, j + 1));
    }
  }
  return subs;
}

console.log(substrings("cat"));
