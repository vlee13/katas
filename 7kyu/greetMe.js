//Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

//https://www.codewars.com/kata/535474308bb336c9980006f2

//Sudo code:
//make first letter of the name capitalized
//make rest of name lowercased
//insert that into `Hello ___!` for the return

//Solution
var greet = function (name) {
  return `Hello ${name[0].toUpperCase() + name.substring(1).toLowerCase()}!`;
};
