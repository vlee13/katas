// Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.``ex: In Racket, the function is called palindrome?

// (palindrome? "nope") ; returns #f
// (palindrome? "Yay")  ; returns #t;

//Common interview question

//Solution 1
function isPalindrome(x) {
  let str = x.split("").reverse().join("");
  if (x.toLowerCase() === str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

//Solution 1 shorthand with ternary
function isPalindrome(x) {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
    ? true
    : false;
}
