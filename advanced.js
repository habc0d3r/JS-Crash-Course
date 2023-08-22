//1 - word vs keyword ✅
//2 - var, const, let ✅
//3 -- the difference: ✅
// two versions of JS: ES5 is old & ES6 is new
// var was in ES5
// var is function scoped i.e. var can be used anywhere inside its parent function
function abcd() {
  for (var i = 1; i < 12; i++) {
    console.log(i);
  }
  console.log(i);
}
abcd();

// var adds itself to the window object
var a = 12; // this is not good because it exposes variable and data
// let & const are in ES6
// let and const are braces scoped
function abcd() {
  for (let i = 1; i < 12; i++) {
    console.log(i);
  }
  // console.log(i);
}
abcd();
// let & const don't add itself to the window object
let b = 10;
// we are using both ES5 and ES6, so we have all var, let, const

//4 -- windows object ✅
// there are many features in JS but some features that we use are not in JS still we are able to use them because JS use them from window, which is a box of features given by browser to use with JS.
//5 -- browser context API

//6 -- stack
//7 -- heap memory ✅
// We use something to store the variables or data that we create, which is Heap memory
//8 -- execution context ✅
// execution context is a imaginary container where the function's code is executed and it's created whenever a function is called, it contains 3 things, variables, functions and lexical environment of the function.
//9 -- lexical environment ✅
// lexical environment is a chart that contains which things are/aren't accessible a particular function or we can say it contains it's scope and scope chain
//10 - hoisting ✅
//11 - types in JavaScript ✅
//12 -- how to copy reference values ✅
// (spread operator)
var a = [1, 2, 4, 64, 66];
var d = [...a];

var obj = {
  name: "Hengul",
  age: 23,
};

var copyObj = { ...obj };

//13 - condition ✅
//14 - if, else, else if ✅
//15 -- truthy vs falsy ✅
// In JS whatever we write belongs to 2 types: either truthy or falsy
// falsy values are: 0 false undefined null NaN document.all
//16 -- switch ✅
switch (1) {
  case 1:
    break;
  case 2:
    break;
  default:
}
//17 - loops ✅
//18 - for, while ✅
//19 -- foreach, for in, for of(not used), do-while) ✅
// forEach : only runs on array.
// By default forEach never makes any changes to the main array instead it makes changes to a temporary copy of the array, so the array remains same.
var arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach(function (val) {
  console.log(val + 10);
});

// for in: this loop is to run in objects
var obj = {
  name: "Hengul",
  age: 23,
  city: "Majuli",
};

for (var key in obj) {
  console.log(key, obj[key]);
}

// do-while (rarely): can be used if we have to run the code once first and then check the condition
// var a = 12;
// do {
//   console.log("Hey");
//   a++;
// } while (a < 15);

//20 - functions ✅
//21 -- call back function ✅
// The code that runs later or after a certain task we give a function to that code, and that function is called callback function. callback function is passed as an argument to another function
//22 -- what is first class function ✅
// It's a concept which says in JS we can use a function as a value
var func = function () {
  console.log("Something");
};

function abcd(a) {
  a;
}
abcd(function () {
  console.log("hey");
});
//23 - parameters, arguments ✅
//24 - arrays ✅
//25 - push, pop, shift, unshift ✅
//26 -- how array are made behind the scenes ✅
var arr = [101, 242, 43, 644];
// if we create an array like this ^ it actually stores like this in object form>
arr = {
  0: 101,
  1: 242,
  2: 43,
  3: 644,
};

arr[-1] = "minus one";
arr["somthing"] = "don't know";
// to check if something is an array or object
Array.isArray([]);
Array.isArray({});
//27 -- why we can make negative indexes array in JavaScript ✅
// Because array in JS are not actually array but Objects. and in Objects we store something as key - value pair and key can be any string including negative numbers, so we can make negative indexes array in JS.
//28 - objects ✅
//29 - properties vs methods ✅
//30 - updating object properties ✅
//31 -- how to delete object properties ✅
var blah = {
  name: "foo",
  age: 34,
};

delete blah.age;
