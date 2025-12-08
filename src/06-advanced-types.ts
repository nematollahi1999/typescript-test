/**
 * Exercise 6: Advanced Types
 * 
 * Work with union types, intersection types, type guards, and utility types.
 */

// TODO: Create a type alias 'Status' that is a union of 'pending' | 'approved' | 'rejected'
type Status = 'pending' | 'approved' | 'rejected';

// TODO: Create a type alias 'ID' that is a union of string | number
type ID = string | number;

// TODO: Create an intersection type 'AdminUser' that combines:
// - { role: 'admin' }
// - { permissions: string[] }
type AdminUser = { role: 'admin' } & { permissions: string[] };

// TODO: Create a type guard function 'isString' that checks if value is string
// function isString(value: any): boolean {
//   return typeof value === "string";
// }
function isString(value: any): value is string {
  return typeof value === "string";
}

// TODO: Create a type guard function 'isNumber' that checks if value is number
function isNumber(value: any): value is number {
    return typeof value === "number";
}

// TODO: Create a function 'processId' that uses type narrowing:
// - if ID is string, return it uppercased
// - if ID is number, return it as string
function processId(id: ID): string {
  if (isString(id)) return id.toUpperCase();
  if (isNumber(id)) return id.toString();
  return '';
}

// TODO: Create an interface 'Product' with:
// - id: number
// - name: string
// - price: number
// - description?: string
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

// TODO: Use Partial utility type to create a type for updating a product
type ProductUpdate = Partial<Product>;

// TODO: Use Pick utility type to create a type with only id and name from Product
type ProductSummary = Pick<Product, 'id' | 'name'>;

// TODO: Use Omit utility type to create a type without id from Product
type ProductWithoutId = Omit<Product, 'id'>;

// TODO: Use Readonly utility type to create a readonly version of Product
type ReadonlyProduct = Readonly<Product>;

// TODO: Create a mapped type 'OptionalFields' that makes all fields optional
type OptionalFields<T> = {
  [P in keyof T]?: T[P];
};

// TODO: Create a conditional type 'ArrayElement' that extracts element type from array
// Example: ArrayElement<string[]> should be string
type ArrayElement<T> = T extends (infer TestType)[] ? TestType : never;

// TODO: Create a function 'safeGet' with conditional return type:
// - if key exists in object, return T[K]
// - if key doesn't exist, return undefined
function safeGet<T extends keyof object, K extends keyof T>(obj: T, key: K): T[K] | undefined {
    return key in obj ? obj[key] : undefined;
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

