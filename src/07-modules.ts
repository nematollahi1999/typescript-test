/**
 * Exercise 7: Modules
 * 
 * Practice with ES6 modules and TypeScript module system.
 */

// TODO: Export a constant 'API_BASE_URL' with value 'https://api.example.com'
export const API_BASE_URL: string = 'https://api.example.com';

// TODO: Export a function 'fetchUser' that takes an id (number) and returns Promise<User>
// Define a User interface with id, name, email
interface User {
  id: number;
  name: string;
  email: string;
}

export async function fetchUser(id: number): Promise<User> {
  
  return { id, name : '', email : ''} as User;
}

// TODO: Create a default export function 'greet' that takes a name and returns a greeting
export default function greet(name: string): string {
  return `Hello, ${name}`;
}

// TODO: Export a named class 'ApiClient'
export class ApiClient {
  // Add a private baseUrl property
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // Add a public method 'get' that takes an endpoint and returns Promise<any>
  async get(endpoint: string): Promise<any> {
    // Implement method
     return {
      data: `Fetched data from ${this.baseUrl}${endpoint}`,
      status: 200
    };
  }
}

// TODO: Create a type alias 'ApiResponse' and export it
// It should be a generic type: ApiResponse<T> = { data: T; status: number }
export type ApiResponse<T> = {
  data: T;
  status: number;
};

// TODO: Export an enum 'HttpMethod' with values: GET, POST, PUT, DELETE
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

// TODO: Re-export everything from './01-basic-types' as 'BasicTypes'
// (This is just for practice - in real scenario you'd import from the actual file)
export * from './01-basic-types';


export { User };

