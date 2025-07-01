// Variables
let userName: string = 'Ronald';
let userAge: number = 44;
let isActive: boolean = true;

// Arrays
let scores: number[] = [94, 88, 89];
let names: string[] = ['Hans', 'John', 'Garfield'];

// Functions
function addNumbers(a: number, b: number) {
  return a + b;
}

function formatMessage(name: string, age: number) {
  return `User ${name} is ${age} years old.`;
}

function greet() {
  let user = { name: 'hans' };
  return user.name.toUpperCase();
}
