// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

//https://www.codewars.com/kata/5266876b8f4bf2da9b000362

//Solution 1
function likes(names) {
  if (names.length === 0) return "no one likes this";
  for (let i = 0; i < names.length; i++) {
    if (names.length === 1) return `${names[0]} likes this`;
    if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
    if (names.length === 3)
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    if (names.length === 4)
      return `${names[0]}, ${names[1]} and 2 others like this`;
    if (names.length > 4)
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

//Solution 2 with switch statement
function likes(names) {
  switch (true) {
    case names.length === 0:
      return "no one likes this";
      break;
    case names.length === 1:
      return `${names[0]} likes this`;
      break;
    case names.length === 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case names.length === 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    case names.length >= 4:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

//Solution 3 using return as obj
function likes(names) {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}
