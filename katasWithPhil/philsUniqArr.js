//given arr
[1, 2, 3, 3, 3, 4, 5];

//filter into this:
[1, 2, 3, 4, 5];

//Solution 1
const uniq = (arr) => {
  arr = arr.sort((a, b) => {
    a === b ? arr.pop(b) : a - b;
  });
};

//Solution 2
const uniq = (arr) => {
  let uniqArr = arr.filter((num, i) => i === arr.indexOf(num));
  return uniqArr;
};
