// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//https://www.codewars.com/kata/57eae65a4321032ce000002d

//first with for loop
function fakeBin(x) {
  let result = "";
  for (i = 0; i < x.length; i++) {
    x[i] < 5 ? (result += 0) : (result += 1);
    return result;
  }
}

//shorter/faster with map()
function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

//replace() with regex (regular expression)
/*replace() - The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced. */
/*regex - 'g' is for global search. Meaning it'll match all occurrences. You'll usually also see 'i' which means ignore case. Reference: global - JavaScript | MDN. The "g" flag indicates that the regular expression should be tested against all possible matches in a string.*/
function fakeBin(x) {
  return x.replace(/[1234]/g, "0").replace(/[56789]/g, "1");
}
