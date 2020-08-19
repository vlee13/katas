`The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

cockroachSpeed(1.08) == 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.`;

function cockroachSpeed(s) {
  return Math.floor(s * 27.78);
}

//one km/hr to cm/sec is 100000/3600 = 27.77777777778
//multiply 27.78 to s
//Math.floor() rounds Real number down

//Real numbers:
//The real numbers include all the rational numbers, such as the integer −5 and the fraction 4/3, and all the irrational numbers, such as √2 (1.41421356..., the square root of 2, an irrational algebraic number).
