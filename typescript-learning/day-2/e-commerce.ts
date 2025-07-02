interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface Order {
  id: string;
  userId: string;
  total: number;
  status: string;
}

const products: Product[] = [
  { id: 'p1', name: 'MacBook Pro', price: 2399, category: 'Electronics' },
  { id: 'p2', name: 'iPhone 15', price: 999, category: 'Electronics' },
  { id: 'p3', name: 'Nike Air Max', price: 129, category: 'Shoes' },
  { id: 'p4', name: 'Coffee Maker', price: 89, category: 'Kitchen' },
  { id: 'p5', name: 'Wireless Headphones', price: 199, category: 'Electronics' },
];

const users: User[] = [
  { id: 'u1', name: 'Alice Johnson', email: 'alice@email.com', role: 'admin' },
  { id: 'u2', name: 'Bob Smith', email: 'bob@email.com', role: 'customer' },
  { id: 'u3', name: 'Charlie Brown', email: 'charlie@email.com', role: 'customer' },
  { id: 'u4', name: 'Diana Ross', email: 'diana@email.com', role: 'manager' },
  { id: 'u5', name: 'Eddie Murphy', email: 'eddie@email.com', role: 'customer' },
];

const orders: Order[] = [
  { id: 'o1', userId: 'u2', total: 999, status: 'shipped' },
  { id: 'o2', userId: 'u3', total: 129, status: 'delivered' },
  { id: 'o3', userId: 'u5', total: 288, status: 'pending' },
  { id: 'o4', userId: 'u2', total: 89, status: 'cancelled' },
  { id: 'o5', userId: 'u4', total: 2399, status: 'processing' },
];

function searchByName<T extends { name: string }>(items: T[], searchString: string): T[] {
  return items.filter((item) => item.name.toLowerCase().includes(searchString.toLowerCase()));
}

function sortByProperty<T>(items: T[], property: keyof T): T[] {
  if (items.length === 0) return [];

  if (typeof items[0][property] === 'number') {
    return [...items].sort((a, b) => (a[property] as number) - (b[property] as number));
  } else {
    return [...items].sort((a, b) => (a[property] as string).localeCompare(b[property] as string));
  }
}

// Testing functions
console.log('searchByName(users, "d"):', searchByName(users, 'd'));

console.log('sortByProperty(products, "category"):', sortByProperty(products, 'category'));
