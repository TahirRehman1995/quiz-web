
// 5 Write a function that takes an array of numbers as input
//  and returns a new array that contains only the even numbers.

let filterEven =[1, 2, 3, 4, 5, 6] 

const returnEvenArray = (filterEve) => {
   return filterEven.filter(el => {
      return el % 2 === 0;
   })
};
console.log(returnEvenArray(filterEven));