// DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Type for employee which can be either Director or Teacher
type Employee = Director | Teacher;

// Function to create employee based on salary
function createEmployee(salary: number | string): Employee {
  // if (salary < 500)
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

export function isDirector(employee: Employee): employee is Director {
  // Check if the employee has the workDirectorTasks method specific to Director
  return (employee as Director).workDirectorTasks !== undefined;
}

// 2. executeWork function
function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    // TypeScript now knows employee is a Director
    return employee.workDirectorTasks();
  } else {
    // TypeScript now knows employee is a Teacher
    return employee.workTeacherTasks();
  }
}

// Demonstration function
export function demonstrateRequestedFunctions(): void {
  console.log('=== Demonstrating Requested Functions ===');
  
  // Create employees
  const teacherEmployee = createEmployee(200);
  const directorEmployee = createEmployee(1000);
  
  // Test isDirector function
  console.log('\n1. Testing isDirector function:');
  console.log(`isDirector(createEmployee(200)): ${isDirector(teacherEmployee)}`);
  console.log(`isDirector(createEmployee(1000)): ${isDirector(directorEmployee)}`);
  
  // Test executeWork function - This shows the expected results
  console.log('\n2. Testing executeWork function:');
  console.log(`executeWork(createEmployee(200)): ${executeWork(teacherEmployee)}`);
  console.log(`executeWork(createEmployee(1000)): ${executeWork(directorEmployee)}`);
  
  // Expected output demonstration
  console.log('\n3. Expected Results:');
  console.log('executeWork(createEmployee(200)); // Expected: "Getting to work"');
  console.log('executeWork(createEmployee(1000)); // Expected: "Getting to director tasks"');
}

// Export the requested functions
export { isDirector, executeWork, createEmployee, Employee };
