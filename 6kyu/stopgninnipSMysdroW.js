// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Examples:

// spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
// spinWords("This is a test") => "This is a test"
// spinWords("This is another test") => "This is rehtona test"

// https://www.codewars.com/kata/5264d2b162488dc400000001

//Solution 1
function spinWords(string) {
  let wordArr = string.split(" ");
  let newStr = [];
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i].length >= 5) {
      newStr.push(wordArr[i].split("").reverse().join(""));
    } else {
      newStr.push(wordArr[i]);
    }
  }
  return newStr.join(" ");
}

//Solution 2
function spinWords(string) {
  return string
    .split(" ")
    .map((el) => (el.length >= 5 ? el.split("").reverse().join("") : el))
    .join(" ");
}
