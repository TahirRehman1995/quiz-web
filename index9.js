// 9. Write a function that takes an array of strings as 
// input and returns a new 
// array that contains the length of each string 
// in the original array.



let arr = ["hi", "hello", "hey", "howdy"];
let lengths = stringLengths(arr);

function stringLengths(arr) {
    let lengths = [];
  
    for (let i = 0; i < arr.length; i++) {
      lengths.push(arr[i].length);
    }
  
    return lengths;
  }
  console.log(lengths);