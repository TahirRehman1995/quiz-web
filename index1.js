// 10. Write a function that takes an array of numbers as
//  input and returns the index of the first number in the 
//  array that is greater than or equal to 10.

let array =[1,5,15,20]
const i = array[0]

function FirstGretIndex(array) {
    for (let i = 0;i < array.length; i++)
{
    if (array[i] >=10)
    return i
}
}

console.log(FirstGretIndex(array))