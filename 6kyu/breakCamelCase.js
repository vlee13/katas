// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

//https://www.codewars.com/kata/5208f99aee097e6552000148

//Solution 1
function solution(string) {
  string = string.split("").map((letter) => {
    if (letter === letter.toUpperCase()) {
      letter = ` ${letter}`;
    }
    return letter;
  });
  return string.join("");
}

//Solution 2
function solution(string) {
  //use capturing group and numbered backreference in regex
  return string.replace(/([A-Z])/g, " $1");
}
