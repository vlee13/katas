`Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).``Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).``Examples:

hello "john"   => "Hello, John!"
hello "aliCE"  => "Hello, Alice!"
hello          => "Hello, World!" # name not given
hello ''       => "Hello, World!" # name is an empty String`;

function hello(name) {
  return name
    ? `Hello, ${name.substring(0, 1).toUpperCase()}${name
        .substring(1)
        .toLowerCase()}!`
    : `Hello, World!`;
}

function hello(name) {
  return name
    ? `Hello, ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`
    : `Hello, World!`;
}

//substring and slice very similar (start,end)
//- substring cuts original string from start to end (not including end)
//- slice cuts out array from start to end (not including end)
//(index) - anything after that index

//charAt(index) - selects that index only
