// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

// Street
// 1|   |6
// 3|   |4
// 5|   |2

// Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

// Example
// Given your house number address and length of street n, give the house number on the opposite side of the street.

// overTheRoad(address, n)
// overTheRoad(1, 3) = 6
// overTheRoad(3, 3) = 4
// overTheRoad(2, 3) = 5
// overTheRoad(3, 5) = 8

//https://www.codewars.com/kata/5f0ed36164f2bc00283aed07

//Solution
function overTheRoad(address, n) {
  let totalHouses = 2 * n;
  let difference = address - 1;
  return totalHouses - difference;
  //   return 2 * n - (address - 1);
}

//Orrrr
function overTheRoad(address, n) {
  return n * 2 + 1 - address;
}
