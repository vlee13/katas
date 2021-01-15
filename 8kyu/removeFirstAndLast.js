// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

//Solution 1 with pop and shift
function removeChar(str) {
  let result = str.split("");
  result.pop();
  result.shift();
  return result.join("");
}

//Solution 2 with for loop
function removeChar(str) {
  //You got this!
  let newStr = "";
  for (let i = 1; i < str.length - 1; i++) {
    newStr += str[i];
  }
  return newStr;
}

//Solution 3 with slice
function removeChar(str) {
  return str.slice(1, -1);
}
