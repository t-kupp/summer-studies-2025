// Create a more complex system with nested interfaces

// 1. Address interface:
// - street, city, country (all strings)
// - zipCode (string), coordinates (optional object with lat and lng numbers)

// 2. Employee interface:
// - id (number), name (string), email (string)
// - position (string), salary (number)
// - address (using Address interface)
// - manager (optional Employee - yes, an employee can reference another employee!)
// - directReports (array of employee IDs as numbers)

// 3. Department interface:
// - name (string), budget (number)
// - head (Employee), employees (array of Employees)
// - location (Address)

// Create functions:
// - calculateDepartmentSalaries (total salary cost)
// - findEmployeesByPosition
// - promoteEmployee (change position and salary)

interface Address {
  street: string;
  city: string;
  country: string;
  zipCode: string;
  coordinates?: { lat: number; lng: number };
}

interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  salary: number;
  address: Address;
  manager?: Employee;
  directReports: number[];
}

interface Department {
  name: string;
  budget: number;
  head: Employee;
  employees: Employee[];
  location: Address;
}

let addresses: Address[] = [
  {
    street: '123 Tech Street',
    city: 'San Francisco',
    country: 'USA',
    zipCode: '94105',
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
  {
    street: '456 Business Ave',
    city: 'New York',
    country: 'USA',
    zipCode: '10001',
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    street: '789 Innovation Blvd',
    city: 'Austin',
    country: 'USA',
    zipCode: '73301',
    coordinates: { lat: 30.2672, lng: -97.7431 },
  },
  {
    street: '321 Corporate Way',
    city: 'Seattle',
    country: 'USA',
    zipCode: '98101',
  },
];

let employees: Employee[] = [
  {
    id: 1,
    name: 'Sarah Wilson',
    email: 'sarah.wilson@company.com',
    position: 'CEO',
    salary: 250000,
    address: addresses[0],
    directReports: [2, 3, 4],
  },
  {
    id: 2,
    name: 'Mike Johnson',
    email: 'mike.johnson@company.com',
    position: 'Engineering Manager',
    salary: 120000,
    address: addresses[0],
    directReports: [5, 6, 7],
  },
  {
    id: 3,
    name: 'Lisa Chen',
    email: 'lisa.chen@company.com',
    position: 'Marketing Manager',
    salary: 95000,
    address: addresses[1],
    directReports: [8, 9],
  },
  {
    id: 4,
    name: 'David Brown',
    email: 'david.brown@company.com',
    position: 'Sales Manager',
    salary: 110000,
    address: addresses[2],
    directReports: [10, 11],
  },
  {
    id: 5,
    name: 'Alex Rodriguez',
    email: 'alex.rodriguez@company.com',
    position: 'Senior Developer',
    salary: 95000,
    address: addresses[0],
    directReports: [],
  },
  {
    id: 6,
    name: 'Emma Davis',
    email: 'emma.davis@company.com',
    position: 'Frontend Developer',
    salary: 80000,
    address: addresses[0],
    directReports: [],
  },
  {
    id: 7,
    name: 'James Smith',
    email: 'james.smith@company.com',
    position: 'Backend Developer',
    salary: 85000,
    address: addresses[3],
    directReports: [],
  },
  {
    id: 8,
    name: 'Rachel Green',
    email: 'rachel.green@company.com',
    position: 'Marketing Specialist',
    salary: 65000,
    address: addresses[1],
    directReports: [],
  },
  {
    id: 9,
    name: 'Tom Wilson',
    email: 'tom.wilson@company.com',
    position: 'Content Creator',
    salary: 60000,
    address: addresses[1],
    directReports: [],
  },
  {
    id: 10,
    name: 'Jessica Taylor',
    email: 'jessica.taylor@company.com',
    position: 'Sales Representative',
    salary: 70000,
    address: addresses[2],
    directReports: [],
  },
  {
    id: 11,
    name: 'Chris Anderson',
    email: 'chris.anderson@company.com',
    position: 'Account Manager',
    salary: 75000,
    address: addresses[2],
    directReports: [],
  },
];

// Setting employees manager after employees array initialization
employees[1].manager = employees[0]; // Mike's manager is Sarah
employees[2].manager = employees[0]; // Lisa's manager is Sarah
employees[3].manager = employees[0]; // David's manager is Sarah
employees[4].manager = employees[1]; // Alex's manager is Mike
employees[5].manager = employees[1]; // Emma's manager is Mike
employees[6].manager = employees[1]; // James's manager is Mike
employees[7].manager = employees[2]; // Rachel's manager is Lisa
employees[8].manager = employees[2]; // Tom's manager is Lisa
employees[9].manager = employees[3]; // Jessica's manager is David
employees[10].manager = employees[3]; // Chris's manager is David

let departments: Department[] = [
  {
    name: 'Engineering',
    budget: 2000000,
    head: employees[1], // Mike Johnson
    employees: [employees[1], employees[4], employees[5], employees[6]], // Mike + his team
    location: addresses[0],
  },
  {
    name: 'Marketing',
    budget: 800000,
    head: employees[2], // Lisa Chen
    employees: [employees[2], employees[7], employees[8]], // Lisa + her team
    location: addresses[1],
  },
  {
    name: 'Sales',
    budget: 1200000,
    head: employees[3], // David Brown
    employees: [employees[3], employees[9], employees[10]], // David + his team
    location: addresses[2],
  },
];

// Calculate the combined salaries of a department
function calculateDepartmentSalaries(department: Department) {
  return department.employees.reduce((total, employee) => total + employee.salary, 0);
}

// Find all employees for a specific position
function findEmployeesByPosition(position: string) {
  return employees.filter((employee) => employee.position === position);
}

// Promote an employee with a new position and salary
function promoteEmployee(employee: Employee, newPosition: string, newSalary: number) {
  const oldPosition = employee.position;
  const oldSalary = employee.salary;

  employee.position = newPosition;
  employee.salary = newSalary;

  console.log(
    `${employee.name} promoted from ${oldPosition} to ${newPosition} ($${oldSalary} to $${newSalary})`
  );

  return employee;
}

// Find all employees under a specific manager
function findEmployeesByManager(managerId: number) {
  return employees.filter((employee) => employee.manager?.id === managerId);
}

// Get department by employee
function findDepartmentOfEmployee(employeeId: number) {
  return departments.find((department) =>
    department.employees.some((employee) => employee.id === employeeId)
  );
}

// Calculate average salary in department
function calculateAverageSalaryInDepartment(department: Department) {
  const totalSalary = department.employees.reduce((total, employee) => total + employee.salary, 0);
  return (totalSalary / department.employees.length).toFixed(2);
}

// Testing the functions
console.log(
  'calculateDepartmentSalaries(departments[0]):',
  calculateDepartmentSalaries(departments[0])
);

console.log(
  'findEmployeesByPosition("Marketing Manager"):',
  findEmployeesByPosition('Marketing Manager')
);

console.log(
  'promoteEmployee(employees[0], "Mascot", 420):',
  promoteEmployee(employees[0], 'Mascot', 420)
);

console.log('findEmployeesByManager(2):', findEmployeesByManager(2));

console.log('findDepartmentOfEmployee(5):', findDepartmentOfEmployee(5));

console.log(
  'calculateAverageSalaryInDepartment(departments[1]):',
  calculateAverageSalaryInDepartment(departments[1])
);
