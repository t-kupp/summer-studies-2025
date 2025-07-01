// Create interfaces for a basic e-commerce system

// 1. Product interface with these properties:
// - id (number), name (string), price (number)
// - category (one of: 'electronics', 'clothing', 'books', 'home')
// - inStock (boolean), description (optional string)

// 2. Order interface:
// - orderId (string), customerId (number)
// - items (array of products), totalAmount (number)
// - status (one of: 'pending', 'shipped', 'delivered', 'cancelled')
// - orderDate (Date), shippingAddress (optional string)

// 3. Customer interface:
// - id (number), name (string), email (string)
// - orders (array of order IDs as strings)
// - isVip (optional boolean)

// Then create sample data and functions:
// - createOrder function that takes a customer and products
// - findExpensiveProducts function (over certain price)
// - getCustomerOrders function

interface Product {
  id: number;
  name: string;
  price: number;
  category: 'electronics' | 'clothing' | 'books' | 'home';
  inStock: boolean;
  description?: string;
}

interface Order {
  orderId: string;
  customerId: number;
  items: Product[];
  totalAmount: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: Date;
  shippingAddress?: string;
}

interface Customer {
  id: number;
  name: string;
  email: string;
  orders: string[];
  isVip?: boolean;
}

// Sample data
const products: Product[] = [
  {
    id: 1,
    name: 'MacBook Air',
    price: 1299,
    category: 'electronics',
    inStock: true,
    description: 'Lightweight laptop with M1 chip',
  },
  {
    id: 2,
    name: 'iPhone 14',
    price: 899,
    category: 'electronics',
    inStock: true,
    description: 'Latest iPhone with advanced camera',
  },
  {
    id: 3,
    name: 'Nike Running Shoes',
    price: 120,
    category: 'clothing',
    inStock: false,
  },
  {
    id: 4,
    name: 'The Great Gatsby',
    price: 15,
    category: 'books',
    inStock: true,
    description: 'Classic American novel',
  },
  {
    id: 5,
    name: 'Coffee Maker',
    price: 89,
    category: 'home',
    inStock: true,
    description: 'Programmable drip coffee maker',
  },
  {
    id: 6,
    name: 'Leather Jacket',
    price: 250,
    category: 'clothing',
    inStock: true,
  },
];

const customers: Customer[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    orders: ['order-001', 'order-003'],
    isVip: true,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    orders: ['order-002'],
    isVip: false,
  },
  {
    id: 3,
    name: 'Bob Wilson',
    email: 'bob@example.com',
    orders: [],
  },
];

const orders: Order[] = [
  {
    orderId: 'order-001',
    customerId: 1,
    items: [products[0], products[3]], // MacBook + Book
    totalAmount: 1314,
    status: 'delivered',
    orderDate: new Date('2024-01-15'),
    shippingAddress: '123 Main St, New York, NY',
  },
  {
    orderId: 'order-002',
    customerId: 2,
    items: [products[2], products[5]], // Shoes + Jacket
    totalAmount: 370,
    status: 'shipped',
    orderDate: new Date('2024-02-20'),
  },
  {
    orderId: 'order-003',
    customerId: 1,
    items: [products[4]], // Coffee Maker
    totalAmount: 89,
    status: 'pending',
    orderDate: new Date('2024-03-01'),
    shippingAddress: '123 Main St, New York, NY',
  },
];

// Add new order
function createOrder(customer: Customer, products: Product[]) {
  let newOrder: Order = {
    orderId: 'order-004', // Should have sequential id
    customerId: customer.id,
    items: products,
    totalAmount: products.reduce((total, product) => total + product.price, 0),
    status: 'pending',
    orderDate: new Date(),
  };
  customer.orders.push(newOrder.orderId);
  orders.push(newOrder);
  return newOrder;
}

// Filter out items above a certain value
function findExpensiveProducts(products: Product[], minPrice: number) {
  return products.filter((product) => product.price > minPrice);
}

// Get customer orders
function getCustomerOrders(customer: Customer, orders: Order[]) {
  return orders.filter((order) => order.customerId === customer.id);
}

// Testing functions
console.log(
  'createOrder(customers[0], [products[0], products[1]]):',
  createOrder(customers[0], [products[0], products[1]])
);

console.log(
  'findExpensiveProducts(products, 500):',
  findExpensiveProducts(products, 500)
);

console.log(
  'getCustomerOrder(customers[0], orders):',
  getCustomerOrders(customers[0], orders)
);
