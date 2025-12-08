/**
 * Exercise 3: Classes
 * 
 * Create classes with proper TypeScript syntax.
 */

// TODO: Create a class 'Animal' with:
// - private property 'name': string
// - protected property 'age': number
// - public method 'getName()': returns string
// - constructor that takes name and age
class Animal {
  private name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public getName(): string {
    return this.name;
  }
}

// TODO: Create a class 'Dog' that extends 'Animal' and adds:
// - private property 'breed': string
// - public method 'bark()': returns string
// - override 'getName()' to return formatted string
class Dog extends Animal {
  private breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  public bark(): string {
    return "Woof! Woof!";
  }

  // override getName
  public getName(): string {
    return `Dog: ${super.getName()} (${this.breed})`;
  }
}

// TODO: Create an abstract class 'Shape' with:
// - abstract method 'getArea()': returns number
// - abstract method 'getPerimeter()': returns number
// - protected property 'name': string
abstract class Shape {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
  abstract getArea(): number;
  abstract getPerimeter(): number;
}

// TODO: Create a class 'Rectangle' that extends 'Shape' with:
// - private properties 'width' and 'height': both numbers
// - implement abstract methods
class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  public getArea(): number {
    return this.width * this.height;
  }
  public getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// TODO: Create a class 'Circle' that extends 'Shape' with:
// - private property 'radius': number
// - implement abstract methods
class Circle extends Shape {
  private radius: number;
  constructor(radius: number) {
    super("Circle");
    this.radius = radius;
  }
  public getArea(): number {
    return 3.14 * this.radius * this.radius;
  }
  public getPerimeter(): number {
    return 2 * 3.14 * this.radius;
  }
}

// TODO: Create an interface 'Flyable' with method 'fly()': returns void
interface Flyable {
  fly(): void;
}

// TODO: Create a class 'Bird' that extends 'Animal' and implements 'Flyable'
class Bird extends Animal implements Flyable {
  constructor(name: string, age: number) {
    super(name, age);
  }
  public fly(): void {
    console.log(`${this.getName()} is flying!`);
  }
}

export { Animal, Dog, Shape, Rectangle, Circle, Flyable, Bird };

