/**
 * Exercise 5: Generics
 * 
 * Create generic functions and classes.
 */

// TODO: Create a generic function 'identity' that takes a value of type T and returns T
function identity<T>(value: any): any {
  // Implement function
  return value;
}

// TODO: Create a generic function 'getFirst' that takes an array of type T[] and returns T
function getFirst<T>(array: any): any {
  // Implement function
  return array[0];
}

// TODO: Create a generic function 'merge' that takes two objects and returns a merged object
// Use intersection types in the return type
function merge<T, U>(obj1: any, obj2: any): any {
  // Implement function
  return { ...obj1, ...obj2 };
}

// TODO: Create a generic interface 'Repository' with:
// - getById(id: number): T
// - getAll(): T[]
// - save(item: T): void
interface Repository<T> {
  // Define interface methods
}

// TODO: Create a generic class 'Stack' with:
// - private array: T[]
// - push(item: T): void
// - pop(): T | undefined
// - isEmpty(): boolean
class Stack<T> {
  // Implement class
}

// TODO: Create a generic function 'filterArray' that:
// - takes an array of type T[]
// - takes a predicate function (item: T) => boolean
// - returns filtered array of type T[]
function filterArray<T>(array: any, predicate: any): any {
  // Implement function
  return [];
}

// TODO: Create a generic type constraint function 'getProperty' that:
// - takes an object of type T
// - takes a key of type K where K extends keyof T
// - returns T[K]
function getProperty<T, K extends keyof T>(obj: any, key: any): any {
  // Implement function
  return obj[key];
}

// TODO: Create a generic class 'Pair' with:
// - two properties of generic types T and U
// - constructor that takes both values
// - getFirst(): T
// - getSecond(): U
class Pair<T, U> {
  // Implement class
}

export { identity, getFirst, merge, Repository, Stack, filterArray, getProperty, Pair };

