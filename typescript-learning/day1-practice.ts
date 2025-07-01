// Rectangle calculator
function calculateRectangleArea(side1: number, side2: number): number {
  return side1 * side2;
}

console.log(calculateRectangleArea(5, 10)); // Should output: 50

// User object
const user = {
  name: 'Hans',
  email: 'hans@mail.com',
  age: 50,
};

console.log('user:', user);

// Find users over certain age
interface User {
  name: string;
  email: string;
  age: number;
  favoriteFood?: string;
}

// Array
const users: User[] = [
  {
    name: 'Hans',
    email: 'hans@mail.com',
    age: 50,
    favoriteFood: 'Pizza',
  },
  {
    name: 'Lenny',
    email: 'lenny@mail.com',
    age: 44,
  },
  {
    name: 'Evelyn',
    email: 'evelyn@mail.com',
    age: 22,
  },
];

function findUsersOverAge(users: User[], age: number): User[] | null {
  return users.filter((user) => user.age > age) || null;
}

console.log('find users:', findUsersOverAge(users, 25));
