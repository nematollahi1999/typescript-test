/**
 * Exercise 1: Basic Types
 * 
 * Complete the type annotations below.
 * Replace 'any' with the appropriate TypeScript types.
 */

// TODO: Declare a variable 'age' of type number
// let age: any;
let age: number;

// TODO: Declare a variable 'name' of type string
// let name: any;
let name: string;

// TODO: Declare a variable 'isActive' of type boolean
// let isActive: any;
let isActive: boolean;

// TODO: Declare an array of numbers
// let numbers: any;
let numbers: number[];

// TODO: Declare a tuple: [string, number]
// let personInfo: any;
let personInfo: [string, number];

// TODO: Declare a variable that can be either string or number
// let id: any;
let id: string | number;

// TODO: Declare a variable that can be string, number, or null
// let value: any;
let value: string | number | null;

// TODO: Declare an object with specific properties:
// - name: string
// - age: number
// - email: string (optional)
// let user: any;
let user: { name: string; age: number; email?: string };

// TODO: Create an enum for user roles: Admin, User, Guest
enum UserRole {
  Admin,
  User,
  Guest
}

// string enum
// enum UserRole {
//   Admin="Admin",
//   User="User",
//   Guest="Guest"
// }

// TODO: Complete the function signature with proper types
function greet(person: string): string {
  return `Hello, ${person}`;
}

// TODO: Complete the function that returns nothing (void)
function logMessage(message: string): void {
  console.log(message);
}

// TODO: Complete the function that never returns
function throwError(message: string): never {
  throw new Error(message);
}

export { age, name, isActive, numbers, personInfo, id, value, user, UserRole, greet, logMessage, throwError };

