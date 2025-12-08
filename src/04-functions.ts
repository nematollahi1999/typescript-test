/**
 * Exercise 4: Functions
 * 
 * Implement functions with proper type annotations.
 */

// TODO: Create a function 'multiply' that takes two numbers and returns a number
function multiply(a: number, b: number): number {
  return a * b;
}

// TODO: Create a function 'createUser' with:
// - required parameter: name (string)
// - optional parameter: age (number)
// - default parameter: isActive (boolean, default true)
// - returns an object with these properties
function createUser(name: string, age?: number, isActive: boolean = true): { name: string; age?: number; isActive: boolean } {
  return { name, age, isActive };
}

// TODO: Create a function 'processData' with rest parameters
// that takes any number of numbers and returns their sum
function processData(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// TODO: Create function overloads for 'formatValue':
// - overload 1: takes string, returns string
// - overload 2: takes number, returns string
// - implementation that handles both
function formatValue(value: string): string;
function formatValue(value: number): string;
function formatValue(value: string | number): string {
  return value.toString();
}

// TODO: Create an arrow function 'square' that takes a number and returns its square
const square = (x: number): number => x * x;

// TODO: Create a function type alias 'StringProcessor' for a function that:
// - takes a string
// - returns a string
type StringProcessor = (i : string) => string;

// TODO: Create a function 'toUpperCase' that matches StringProcessor type
const toUpperCase: StringProcessor = (i: string) => i.toUpperCase();


// TODO: Create a higher-order function 'createMultiplier' that:
// - takes a number (multiplier)
// - returns a function that takes a number and returns number * multiplier
function createMultiplier(multiplier: number) {
  // Implement function
  return (x: number) => x * multiplier;
}

export { multiply, createUser, processData, formatValue, square, StringProcessor, toUpperCase, createMultiplier };

