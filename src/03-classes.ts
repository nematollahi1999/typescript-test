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
  // Implement abstract class
}

// TODO: Create a class 'Rectangle' that extends 'Shape' with:
// - private properties 'width' and 'height': both numbers
// - implement abstract methods
class Rectangle {
  // Extend Shape and implement methods
}

// TODO: Create a class 'Circle' that extends 'Shape' with:
// - private property 'radius': number
// - implement abstract methods
class Circle {
  // Extend Shape and implement methods
}

// TODO: Create an interface 'Flyable' with method 'fly()': returns void
interface Flyable {
  // Define interface
}

// TODO: Create a class 'Bird' that extends 'Animal' and implements 'Flyable'
class Bird {
  // Extend Animal and implement Flyable
}

export { Animal, Dog, Shape, Rectangle, Circle, Flyable, Bird };

