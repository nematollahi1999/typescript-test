/**
 * Exercise 6: Advanced Types
 * 
 * Work with union types, intersection types, type guards, and utility types.
 */

// TODO: Create a type alias 'Status' that is a union of 'pending' | 'approved' | 'rejected'
type Status = any;

// TODO: Create a type alias 'ID' that is a union of string | number
type ID = any;

// TODO: Create an intersection type 'AdminUser' that combines:
// - { role: 'admin' }
// - { permissions: string[] }
type AdminUser = any;

// TODO: Create a type guard function 'isString' that checks if value is string
function isString(value: any): any {
  // Implement type guard
  return false;
}

// TODO: Create a type guard function 'isNumber' that checks if value is number
function isNumber(value: any): any {
  // Implement type guard
  return false;
}

// TODO: Create a function 'processId' that uses type narrowing:
// - if ID is string, return it uppercased
// - if ID is number, return it as string
function processId(id: ID): string {
  // Implement with type narrowing
  return '';
}

// TODO: Create an interface 'Product' with:
// - id: number
// - name: string
// - price: number
// - description?: string
interface Product {
  // Define interface
}

// TODO: Use Partial utility type to create a type for updating a product
type ProductUpdate = any;

// TODO: Use Pick utility type to create a type with only id and name from Product
type ProductSummary = any;

// TODO: Use Omit utility type to create a type without id from Product
type ProductWithoutId = any;

// TODO: Use Readonly utility type to create a readonly version of Product
type ReadonlyProduct = any;

// TODO: Create a mapped type 'OptionalFields' that makes all fields optional
type OptionalFields<T> = any;

// TODO: Create a conditional type 'ArrayElement' that extracts element type from array
// Example: ArrayElement<string[]> should be string
type ArrayElement<T> = any;

// TODO: Create a function 'safeGet' with conditional return type:
// - if key exists in object, return T[K]
// - if key doesn't exist, return undefined
function safeGet<T, K extends keyof T>(obj: T, key: K): any {
  // Implement function
  return obj[key];
}

export {
  Status,
  ID,
  AdminUser,
  isString,
  isNumber,
  processId,
  Product,
  ProductUpdate,
  ProductSummary,
  ProductWithoutId,
  ReadonlyProduct,
  OptionalFields,
  ArrayElement,
  safeGet
};

