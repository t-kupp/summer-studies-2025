// Basic generics
function getFirstItem<T>(array: T[]): T | undefined {
  return array[0];
}

function getLastItem<T>(array: T[]): T | undefined {
  return array[array.length - 1];
}

function swapItems<T>(array: T[], index1: number, index2: number): T[] {
  let newArray = [...array];
  const holder = newArray[index1];
  newArray[index1] = newArray[index2];
  newArray[index2] = holder;

  return newArray;
}

const numbers = [1, 2, 3];
const result = swapItems(numbers, 5, 10);
console.log(result);

// Generic extends

interface userGenerics {
  id: number;
  name: string;
  email: string;
}

interface productsGenerics {
  id: number;
  name: string;
  price: number;
}

interface ordersGeneric {
  id: number;
  customerId: number;
  total: number;
}

const usersGenerics = [
  { id: 1, name: 'Alice', email: 'alice@test.com' },
  { id: 2, name: 'Bob', email: 'bob@test.com' },
];

const productsGenerics = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
];

const ordersGenerics = [
  { id: 1, customerId: 1, total: 100 },
  { id: 2, customerId: 2, total: 200 },
];

// Generic constraints
function findById<T extends { id: number }>(array: T[], id: number): T | undefined {
  return array.find((element) => element.id === id);
}

// Multiple generic types, Tuple return types
function createPair<T1, T2>(value1: T1, value2: T2): [T1, T2] {
  return [value1, value2];
}

// Type guarding
function processInput(input: string | number) {
  if (typeof input === 'string') return input.toUpperCase();
  if (typeof input === 'number') return input * 2;
}

interface Car {
  brand: string;
  wheels: number;
  startEngine(): void;
}

interface Boat {
  brand: string;
  length: number;
  sail(): void;
}

function operateVehicle(vehicle: Car | Boat) {
  if ('wheels' in vehicle) return "I'm a car!";
  if ('sail' in vehicle) return "I'm a boat!";
}

// Custom type guards
function isCar(vehicle: Car | Boat): vehicle is Car {
  return 'wheels' in vehicle;
}

function isBoat(vehicle: Car | Boat): vehicle is Boat {
  return 'sail' in vehicle;
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function processValue(value: unknown): string {
  if (isString(value)) return 'Value is a string!';
  return 'Value is not a string.';
}

// Utility types
interface UserPartial {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserSummary = Pick<UserPartial, 'id' | 'name' | 'email'>;
type CreateUser = Omit<UserPartial, 'id'>;

// Partial
function updateUser(user: UserPartial, updates: Partial<UserPartial>): UserPartial {
  return { ...user, ...updates };
}

// Pick
function getUserSummary(user: UserPartial): UserSummary {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

// Omit
function createUser(userData: CreateUser): UserPartial {
  return {
    id: Date.now(),
    ...userData,
  };
}
