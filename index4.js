// 4. Write a function that takes an array of strings as input 
// and returns a new array that 
// contains only the strings that have more than three characters.

const inputArray = ["hi", "hello", "hey", "howdy"]
const outputArray = filterStrings(inputArray);

function filterStrings(array) {
  return array.filter(str => str.length > 3);
}
console.log(outputArray);


