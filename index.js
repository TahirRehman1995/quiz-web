// 9. Write a function that takes an array of strings 
// as input and returns a new array that contains the
//  length of each string in the original array.

let array = ["hi","Hello","hey","Howdy"]
function arrayLength(array) {
    let newArray=[]

    for (let i = 0; i < array.length; i++) {
        const l=array[i].length;
        newArray.push(l) 
    }
    return newArray
}
console.log(arrayLength(array));
