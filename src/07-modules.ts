/**
 * Exercise 7: Modules
 * 
 * Practice with ES6 modules and TypeScript module system.
 */

// TODO: Export a constant 'API_BASE_URL' with value 'https://api.example.com'
export const API_BASE_URL: any = '';

// TODO: Export a function 'fetchUser' that takes an id (number) and returns Promise<User>
// Define a User interface with id, name, email
interface User {
  // Define interface
}

export async function fetchUser(id: any): Promise<any> {
  // Implement function (can be a mock implementation)
  return {} as User;
}

// TODO: Create a default export function 'greet' that takes a name and returns a greeting
export default function greet(name: any): any {
  // Implement function
  return '';
}

// TODO: Export a named class 'ApiClient'
export class ApiClient {
  // Add a private baseUrl property
  private baseUrl: any;

  constructor(baseUrl: any) {
    // Initialize baseUrl
  }

  // Add a public method 'get' that takes an endpoint and returns Promise<any>
  async get(endpoint: any): Promise<any> {
    // Implement method
    return {};
  }
}

// TODO: Create a type alias 'ApiResponse' and export it
// It should be a generic type: ApiResponse<T> = { data: T; status: number }
export type ApiResponse<T> = any;

// TODO: Export an enum 'HttpMethod' with values: GET, POST, PUT, DELETE
export enum HttpMethod {
  // Add enum values
}

// TODO: Re-export everything from './01-basic-types' as 'BasicTypes'
// (This is just for practice - in real scenario you'd import from the actual file)
// export * from './01-basic-types';

export { User };

