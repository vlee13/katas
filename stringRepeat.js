`Write a function called repeatString which repeats the given string src exactly count times.`;

//repeatStr(6, "I") // "IIIIII"
//repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  return s.repeat(n);
}

//one liner
const repeatStr = (n, s) => s.repeat(n);

//repeat():
//The repeat() method returns a string that has been repeated a desired number of times. If the count parameter is not provided or is a value of 0, the repeat() method will return an empty string. If the count parameter is a negative value, the repeat() method will return RangeError.
