// ==== Callbacks ====

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */

const consume = (arg1, arg2, cb) => {
  return cb(arg1, arg2);
};

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
const add = (num1, num2) => {
  return num1 + num2;
};
const multiply = (num1, num2) => {
  return num1 * num2;
};
const greeting = (firstName, lastName) => {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
};

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.
/**
 * when creating a function it creates it own scope and when creating a variable inside the function, you have access to that variable only inside the function
 * and when using closures if you want to return a variable that its not in its own scope it reaches out the outer container to check if the variable exist there. If it does it gets the value from there, and if it does not exits in there it keeps going up. If it does not find it. it return  'variableName is not defined'.
 * i belive this is call LEXICAL SCOPE
 *
 */

// -----------------------------------------------------------------------------------------------
// EXAMPLE

// ---- when calling this function this will make 1500 arrays everytime you call this array.
// ---- whenever you need a new item you will need to call the function again
// function makeArrays(index) {
//   const newArr = new Array(1500).fill("new array");
//   return newArr[index]
// }
// console.log(makeArrays());
// -----------------------------------------------------------------------------------------------

// EXAMPLE WITH CLOSURES
// ---- In this example you will only create the arrays once
// ---- whenever you need an item you can just get it from the return function calling it like in the example below.
// function makeArrayClosure() {
//   const newArr = new Array(1500).fill("closures");
//   return function(index) {
//     return newArr[index];
//   };
// }
// const createArrays = makeArrayClosure();
// const getIndex = createArrays(500);
// console.log(getIndex);
// -----------------------------------------------------------------------------------------------

// Explanation:

// const external = "I'm outside the function";

// function myFunction() {
//   console.log(external);
//   const internal = "Hello! I'm inside myFunction!";

//   function nestedFunction() {
//     console.log(internal);
//   }
//   nestedFunction();
// }
// myFunction();
