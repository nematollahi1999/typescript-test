/**
 * Exercise 1: Basic Types
 * 
 * Complete the type annotations below.
 * Replace 'any' with the appropriate TypeScript types.
 */

// TODO: Declare a variable 'age' of type number
let age: any;

// TODO: Declare a variable 'name' of type string
let name: any;

// TODO: Declare a variable 'isActive' of type boolean
let isActive: any;

// TODO: Declare an array of numbers
let numbers: any;

// TODO: Declare a tuple: [string, number]
let personInfo: any;

// TODO: Declare a variable that can be either string or number
let id: any;

// TODO: Declare a variable that can be string, number, or null
let value: any;

// TODO: Declare an object with specific properties:
// - name: string
// - age: number
// - email: string (optional)
let user: any;

// TODO: Create an enum for user roles: Admin, User, Guest
enum UserRole {
  // Add enum values here
}

// TODO: Complete the function signature with proper types
function greet(person: any): any {
  return `Hello, ${person}`;
}

// TODO: Complete the function that returns nothing (void)
function logMessage(message: any): any {
  console.log(message);
}

// TODO: Complete the function that never returns
function throwError(message: any): any {
  throw new Error(message);
}

export { age, name, isActive, numbers, personInfo, id, value, user, UserRole, greet, logMessage, throwError };

