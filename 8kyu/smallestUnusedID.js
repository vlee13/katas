// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// OK directions aren't very clear so basically: Find the first missing index of ids array

//https://www.codewars.com/kata/55eea63119278d571d00006a

//solution 1 - looking for the next missing number with indexOf == -1 and i counts 0,1,2,3...
function nextId(ids) {
  for (i = 0; i < ids.length; i++) {
    if (ids.indexOf(i) === -1) {
      return i;
    }
  }
  return ids.length;
}

//Solution 2 - if there is some element that does not equal i (0,1,2,3...) then return that count
function nextId(ids) {
  for (i = 0; i <= ids.length; i++) {
    if (!ids.some((element) => element === i)) {
      return i;
    }
  }
}

//Solution 3 - while ids includes n (n will increment 0,1,2,3...) and when it doesn't, return n
function nextId(ids) {
  let n = 0;
  while (ids.includes(n)) n++;
  return n;
}
