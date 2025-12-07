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
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}

// TODO: Define an interface 'Employee' that extends 'Person' and adds:
// - employeeId: number
// - department: string
interface Employee extends Person {
  employeeId: number;
  department: string;
}

// TODO: Define an interface for a function type that takes two numbers and returns a number
interface Calculator {
  (a: number, b: number): number;
}

// TODO: Define an interface 'Config' with an index signature
// that allows any string key with string or number values
interface Config {
  [key: string]: string | number;
}

// TODO: Implement a function that accepts a Person and returns a formatted string
function formatPerson(person: Person): string {
  let info = `${person.firstName} has ${person.age} years old.`;
  return info;
}

// TODO: Create an object that implements the Employee interface
const employee: Employee = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  employeeId: 12345,
  department: "Engineering"
};

// TODO: Create a function that implements the Calculator interface
const add: Calculator = (a, b) => {
  return a + b;
};
// console.log(add(2, 3));

// TODO: Create a config object that matches the Config interface
const appConfig: Config = {
  appName: "MyApp",
  version: 1.0, 
};

export { Person, Employee, Calculator, Config, formatPerson, employee, add, appConfig };

