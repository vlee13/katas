// Given a mathematical equation that has *,+,-,/, reverse it as follows:

// solve("100*b/y") = "y/b*100"
// solve("a+b-c/d*30") = "30*d/c-b+a"

//https://www.codewars.com/kata/5aa3af22ba1bb5209f000037

//Solution 1
function solve(eq) {
  return eq
    .split(/([*+-/])/)
    .reverse()
    .join("");
}

//Solution 2
function solve(eq) {
  return eq.split(/(\D)/).reverse().join("");
}
