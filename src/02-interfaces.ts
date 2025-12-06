/**
 * Exercise 2: Interfaces
 * 
 * Define interfaces and implement them correctly.
 */

// TODO: Define an interface 'Person' with:
// - firstName: string
// - lastName: string
// - age: number
// - email?: string (optional)
interface Person {
  // Add properties here
}

// TODO: Define an interface 'Employee' that extends 'Person' and adds:
// - employeeId: number
// - department: string
interface Employee {
  // Extend Person and add properties
}

// TODO: Define an interface for a function type that takes two numbers and returns a number
interface Calculator {
  // Define function signature
}

// TODO: Define an interface 'Config' with an index signature
// that allows any string key with string or number values
interface Config {
  // Add index signature
}

// TODO: Implement a function that accepts a Person and returns a formatted string
function formatPerson(person: Person): string {
  // Implement this function
  return '';
}

// TODO: Create an object that implements the Employee interface
const employee: Employee = {
  // Add required properties
};

// TODO: Create a function that implements the Calculator interface
const add: Calculator = (a, b) => {
  // Implement addition
  return 0;
};

// TODO: Create a config object that matches the Config interface
const appConfig: Config = {
  // Add some properties
};

export { Person, Employee, Calculator, Config, formatPerson, employee, add, appConfig };

