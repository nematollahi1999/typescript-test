/**
 * Exercise 4: Functions
 * 
 * Implement functions with proper type annotations.
 */

// TODO: Create a function 'multiply' that takes two numbers and returns a number
function multiply(a: any, b: any): any {
  // Implement function
  return 0;
}

// TODO: Create a function 'createUser' with:
// - required parameter: name (string)
// - optional parameter: age (number)
// - default parameter: isActive (boolean, default true)
// - returns an object with these properties
function createUser(name: any, age?: any, isActive: any = true): any {
  // Implement function
  return {};
}

// TODO: Create a function 'processData' with rest parameters
// that takes any number of numbers and returns their sum
function processData(...numbers: any): any {
  // Implement function
  return 0;
}

// TODO: Create function overloads for 'formatValue':
// - overload 1: takes string, returns string
// - overload 2: takes number, returns string
// - implementation that handles both
function formatValue(value: any): any {
  // Implement overloads and function
  return '';
}

// TODO: Create an arrow function 'square' that takes a number and returns its square
const square = (x: any): any => {
  // Implement function
  return 0;
};

// TODO: Create a function type alias 'StringProcessor' for a function that:
// - takes a string
// - returns a string
type StringProcessor = any;

// TODO: Create a function 'toUpperCase' that matches StringProcessor type
const toUpperCase: StringProcessor = (str: any): any => {
  // Implement function
  return '';
};

// TODO: Create a higher-order function 'createMultiplier' that:
// - takes a number (multiplier)
// - returns a function that takes a number and returns number * multiplier
function createMultiplier(multiplier: any): any {
  // Implement function
  return (x: any) => 0;
}

export { multiply, createUser, processData, formatValue, square, StringProcessor, toUpperCase, createMultiplier };

