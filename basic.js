// 1.- word vs keyword ✅
// word: those which are not a part of the language
// keyword: which are recognized by the language

// 2. var, const, let
// 3. hoisting : variable and functions are hoisted which means their declaration is moved on the top of code

console.log(a);
var a = 10; // <-- JS will convert this line to the following two lines

var a; // declaration
a = 10; // initialization
// and the declaration part moves to the top hence returns undefined

// undefined : it exists but don't know the value
// not-defined : it doesn't exist

// 4. types in JS : primitive and reference

// primitives = number, string, null , undefined, boolean
var a = 12;
var b = a;
// reference = [] () {}
// These values, when copied, the real value don't duplicate but the reference of the value get passed.
var a = [1, 2, 3, 4];
var b = a; // b has what a has, changing a will change for b and vise versa

// 5. conditionals
// if, else if, else

// 6. loops - for
for (var i = 25; i < 50; i++) {
  console.log(i);
}

// while
// var a = 12;

// while (a < 20) {
//   a++;
// }

// 7. functions: we use function -
//    1. to run our code in future not immediately.
//    2. to reuse our code
//    3. to run our code every time with different data

// params, arguments
// parameter = variables which stores arguments
// arguments = real value which we pass when a function runs
function abcd(a, b, c) {
  console.log(a, b, c);
}

abcd(223, 34, 5535);

// 8. arrays = we store single value in a variable, but we can't store multiple values in a variable, that's where array comes in, which gives us the freedom to store multiple values or groups of values.

// array = group of values

// 9. push pop shift unshift splice
var arr = [23, 54, 664, 564, 236];
console.log(arr);
arr.push(101); //adds value to the end
console.log(arr);
arr.pop(); // removes value from the end
console.log(arr);
arr.unshift(0); //adds value to the starting
console.log(arr);
arr.shift(); // removes value from the starting
console.log(arr);
arr.splice(2, 2); //remove element to a given count after a specific index

// 10. objects
// when we are talking about more than one person it is array
// when we talk everything about one person it is object. Object is holding details of one particular thing in a key value pair
// 1. blank obj
var a = {};

// 2. filled obj
var person = {
  age: 24,
  name: "Harsh",
  email: "email@email.com",
  contact: 353632645,
  draw: function () {
    console.log("I change tyre! I change!");
  },
};

person.email = "contact@harsh.com";
