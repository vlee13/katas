// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

//Solution 1
function duplicateEncode(word) {
  let unique = "";
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += "(";
    } else {
      unique += ")";
    }
  }
  return unique;
}

//one liner
const duplicateEncode = (word) =>
  word
    .toLowerCase()
    .split("")
    .map((ele, index, arr) =>
      arr.indexOf(ele) !== arr.lastIndexOf(ele) ? ")" : "("
    )
    .join("");

//Solution 2
function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./gi, function (v) {
    if (word.indexOf(v) === word.lastIndexOf(v)) {
      return "(";
    } else {
      return ")";
    }
  });
}
