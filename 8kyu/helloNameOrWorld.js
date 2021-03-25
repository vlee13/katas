// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ''       => "Hello, World!" # name is an empty String;

//https://www.codewars.com/kata/57e3f79c9cb119374600046b

//solution 1
function hello(name) {
  return name
    ? `Hello, ${name.substring(0, 1).toUpperCase()}${name
        .substring(1)
        .toLowerCase()}!`
    : `Hello, World!`;
}

//solution without ternary
// function hello(name) {
//   if (name) {
//     return `Hello, ${name.substring(0, 1).toUpperCase()}${name
//       .substring(1)
//       .toLowerCase()}!`
//   } else {
//     return `Hello, World!`
//   }
// }

// function hello(name) {
//   if (name === '' || name === undefined) {
//     return `Hello, World!`
//   } else {
//     return `Hello, ${name.substring(0, 1).toUpperCase()}${name
//       .substring(1)
//       .toLowerCase()}!`
//   }
// }

//solution 2
function hello(name) {
  return name
    ? `Hello, ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`
    : `Hello, World!`;
}

//substring and slice very similar (start,end)
//- substring cuts original string from start to end (not including end)
//- slice cuts out string or array from start to end (not including end)

//charAt(index) - selects that index only
