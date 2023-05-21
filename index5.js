//3  Write a function that takes an array of numbers as
//  input and returns the sum of the two largest numbers 
//  in the array.

let numbers = [1,2,3,4,5];
let sum = sumOfTwoLargestNumbers(numbers);


function sumOfTwoLargestNumbers(arr) {
  arr.sort(function(a, b) {
    return b - a;
  });
  

  return arr[0] + arr[1];
}

  
console.log(sum);