## JavaScript

### 1. - word vs keyword ✅

word: those which are not a part of the language
keyword: which are recognized by the language

### 2. - var, const, let ✅

var and let are used for declaring variables.
const is used for declaring variables that hold constant values, meaning their values cannot be reassigned once they are assigned initially.

### 3. -- the differences: ✅

Two versions of JS: ES5 is old & ES6 is new.

##### I. var was in ES5

##### II. var is function scoped i.e. var can be used anywhere inside its parent function

```javascript
function abcd() {
  for (var i = 1; i < 12; i++) {
    console.log(i);
  }
  console.log(i);
}
abcd();
```

##### III. var adds itself to the window object

```javascript
var a = 12; // this is not good because it exposes variable and data
```

##### I. let & const are in ES6

##### II. let and const are braces scoped

```javascript
function abcd() {
  for (let i = 1; i < 12; i++) {
    console.log(i);
  }
  // console.log(i);
}
abcd();
```

##### III. let & const don't add itself to the window object

```javascript
let b = 10;
```

We are using both ES5 and ES6, so we have all var, let, const.

### 4. -- Windows object ✅

There are many features in JS, but some features that we use are not in JS, still we are able to use them because JS use those from window or window object, which is a box of features given by browser to use with JS.

(The window object is a global object in the browser's JavaScript environment. It represents the browser window or tab and provides access to various properties and methods related to the browser and the webpage. It's a fundamental part of the browser's Document Object Model (DOM) and JavaScript execution environment.)

### 5. -- Browser Context API ✅

The term browser context typically refers to the environment in which a web page is loaded and executed. This environment includes elements like the Document Object Model (DOM), JavaScript execution, network requests, and more.

(Think of it like separate rooms in a house: each room (context) can have its own things inside it, and they won't affect the other rooms. Similarly, the Browser Context API allows different parts of a web page to run without causing conflicts or security issues.)

### 6. -- Stack ✅

The stack stores small pieces of information that a program needs to remember while it's running.

The stack is like a special memory area that holds small pieces of information, such as function calls, variables, and their values, while a program is running. It helps keep track of where the program is and what it needs to do next.

### 7. -- Heap memory ✅

We use something to store the variables or data that we create, which is Heap memory.

Heap memory is used to store more complex data like variables, objects, and larger data structures that we create in our program. When we make things like objects, arrays, or other custom data, they need more space than simple numbers or letters.

### 8. -- Execution context ✅

Execution context is a imaginary container where the function's code is executed and it's created whenever a function is called. It contains 3 things - variables, functions and lexical environment of the function.

### 9. -- Lexical environment ✅

Lexical environment is a chart that contains which things are/aren't accessible a particular function or we can say it contains it's scope and scope chain.

### 10. - Hoisting ✅

Variable and functions are hoisted which means their declaration is moved on the top of code.

```javascript
console.log(a);
var a = 10;
```

^ JS will convert this line to the following two lines >

```javascript
var a; // declaration
a = 10; // initialization
```

and the declaration part moves to the top of the code hence returns undefined.

undefined : It exists but don't know the value.
not-defined : It doesn't exist.

### 11. - Types in JavaScript ✅

##### There are two main categories of types: Primitive (Immutable) and Reference (Mutable)

Primitives : number, string, null , undefined, boolean

```javascript
var a = 12;
var b = a;
```

Reference = [] () {}

These values, when copied, the real value don't duplicate but the reference of the value get passed.

```javascript
var a = [1, 2, 3, 4];
var b = a;
```

b has what a has, changing a will change for b and vise versa

#### 12. -- How to copy reference values ✅

(spread operator[...])

```javascript
var a = [1, 2, 4, 64, 66];
var d = [...a];
```

```javascript
var obj = {
  name: "Hengul",
  age: 23,
};
var copyObj = { ...obj };
```

### 13. - Conditionals ✅

if, else, else if

### 14. -- truthy vs falsy ✅

In JS whatever we write belongs to 2 types: either truthy or falsy
falsy values are: 0 false undefined null NaN document.all

### 15. -- Switch ✅

```javascript
switch (1) {
  case 1:
    break;
  case 2:
    break;
  default:
}
```

### 16. - Loops : for, while ✅

##### for

```javascript
for (var i = 25; i < 50; i++) {
  console.log(i);
}
```

##### while

```javascript
var a = 12;

while (a < 20) {
  a++;
}
```

### 17. -- foreach, for in, for of, do-while ✅

##### forEach : only runs on array.

By default forEach never makes any changes to the main array instead it makes changes to a temporary copy of the array, so the array remains same.

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach(function (val) {
  console.log(val + 10);
});
```

##### for in: this loop is to run in objects

```javascript
var obj = {
  name: "Hengul",
  age: 23,
  city: "Majuli",
};

for (var key in obj) {
  console.log(key, obj[key]);
}
```

##### do-while (rarely): can be used if we have to run the code once first and then check the condition

```javascript
var a = 12;
do {
  console.log("Hey");
  a++;
} while (a < 15);
```

### 18. - functions ✅

We use function -

1. to run our code in future not immediately.
2. to reuse our code
3. to run our code every time with different data

### 19. - parameters, arguments ✅

parameter : variables which stores arguments
arguments : real value which we pass when a function runs

```javascript
function abcd(a, b, c) {
  console.log(a, b, c);
}

abcd(223, 34, 5535);
```

### 20. -- callback function ✅

The code that runs later or after a certain task we give a function to that code, and that function is called callback function. Callback function is passed as an argument to another function

### 21. -- What is First-class function ✅

It's a concept that says in JS we can use a function as a value.

"First-class function" is a concept in JavaScript that treats functions as first-class citizens. This means we can treat functions like any other value, such as assigning them to variables, passing them as arguments to other functions, or returning them from other functions. In other words, functions in JavaScript can be used just like any other data type, making them incredibly flexible and powerful for various programming tasks.

```javascript
var func = function () {
  console.log("Something");
};

function abcd(a) {
  a;
}
abcd(function () {
  console.log("hey");
});
```

### 22. - arrays ✅

We store single value in a variable, but we can't store multiple values in a variable, that's where array comes in, which gives us the freedom to store multiple values or groups of values.

array : group of values

### 23. - push, pop, shift, unshift, splice ✅

```javascript
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
```

### 24. -- how array are made behind the scenes ✅

```javascript
var arr = [101, 242, 43, 644];
```

If we create an array like this ^ it actually stores like this in object form >

```javascript
arr = {
  0: 101,
  1: 242,
  2: 43,
  3: 644,
};
```

arr[-1] = "minus one";
arr["somthing"] = "don't know";

To check if something is an array or object we use -

```javascript
Array.isArray([]);
Array.isArray({});
```

### 25. -- Why we can make negative indexes array in JavaScript ✅

Because array in JS are not actually array but Objects. and in Objects we store something as key - value pair and key can be any string including negative numbers, so we can make negative indexes array in JS.

### 26. - objects ✅

When we are talking about more than one person it is array,
when we talk everything about one person it is object.
Object is holding details of one particular thing in a key value pair.

1. blank obj

```javascript
var a = {};
```

2. filled obj

```javascript
var person = {
  age: 24,
  name: "Harsh",
  email: "email@email.com",
  contact: 353632645,
  draw: function () {
    console.log("I change tyre! I change!");
  },
};
```

### 27. - properties vs methods ✅

Property: Information about an object that describes its characteristics or attributes.
Method: A property of an object that holds a value which happens to be a function. This function can be called to perform an action or task related to the object.

### 28. - updating object properties ✅

```javascript
person.email = "contact@harsh.com";
```

### 29. -- how to delete object properties ✅

```javascript
var blah = {
  name: "foo",
  age: 34,
};

delete blah.age;
```

### 30. higher order functions ✅

Higher order functions are those functions which accepts other functions in a parameter or return another function.

```javascript
var arr = [1, 23, 4, 6, 63];

arr.forEach(function () {});
```

### 31. Constructor functions ✅

Normal function where "this" is used and "new" keyword is used when calling the function

```javascript
function templateOfBiscuit() {
  this.width = 10;
  this.height = 20;
  this.color = "brown";
  this.taste = "chocolaty";
}

var biscuit1 = new templateOfBiscuit(); //instance 1
var biscuit2 = new templateOfBiscuit(); //instance 2
```

We use constructor function when we have to create more elements having similar kind of properties.

```javascript
function songInfo(name, artist, length, album) {
  this.songName = name;
  this.artist = artist;
  this.length = length;
  this.album = album;
}

var songOne = new songInfo("Reboti", "Dikshu", "5.23", "Reboti");
var songTwo = new songInfo("Aayat", "Arijit Singh", "4.46", "Bajirao Mastani");
```

### 32. new keyword ✅

(Whenever new keyword is used create a blank object in your mind.)
New keyword always creates a blank object for the constructor function which is getting called just after new keyword.

```javascript
function person() {
  this.age = 23;
}

new person();

{
  age: 23;
}
```

### 33. iife (immediately invoked function expression) ✅

iife is a concept to immediately call a function after creating it without needing to call it later

```javascript
var ans = (function () {
  var privateval = 23;

  return {
    getter: function () {
      console.log(privateval);
    },
    setter: function (val) {
      privateval = val;
    },
  };
})();
```

### 34. Prototype ✅

Javascript by default adds a property to every object known as Prototype. Many properties and methods are already available to use inside prototype fo every object.

```javascript
var obj = {
  name: "Hengul",
};
```

### 35. Prototypal Inheritance ✅

To pass parent's features or properties to their children with the help of prototype is called prototypal inheritance.

```javascript
var Human = {
  canFly: false,
  canWalk: true,
  canTalk: true,
  haveEmotions: true,
  hasTwoLegs: true,
  willDie: true,
};

var Hengul = {
  canMakeModernWebsites: true,
  canSing: true,
  canCode: true,
};

Hengul.__proto__ = Human;
```
