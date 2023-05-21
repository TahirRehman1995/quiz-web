
// 7. Write a function that takes a string as input and returns 
// true if the string is a palindrome
// (reads the same backwards as forwards), and false otherwise.

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("heloo world"));
  

