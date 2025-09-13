// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Fernandes',
  lastName: 'Mukanda',
  age: 20,
  location: 'Nairobi'
};

const student2: Student = {
  firstName: 'Zoey',
  lastName: 'Asafi',
  age: 22,
  location: 'Kenya'
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(): void {
  // Create table element
  const table: HTMLTableElement = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';
  table.style.margin = '20px 0';

  // Create table header
  const thead: HTMLTableSectionElement = document.createElement('thead');
  const headerRow: HTMLTableRowElement = document.createElement('tr');
  
  const firstNameHeader: HTMLTableHeaderCellElement = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  firstNameHeader.style.border = '1px solid #ddd';
  firstNameHeader.style.padding = '12px';
  firstNameHeader.style.backgroundColor = '#f2f2f2';
  
  const locationHeader: HTMLTableHeaderCellElement = document.createElement('th');
  locationHeader.textContent = 'Location';
  locationHeader.style.border = '1px solid #ddd';
  locationHeader.style.padding = '12px';
  locationHeader.style.backgroundColor = '#f2f2f2';
  
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody: HTMLTableSectionElement = document.createElement('tbody');

  // For each student in the array, append a new row to the table
  studentsList.forEach((student: Student): void => {
    const row: HTMLTableRowElement = document.createElement('tr');
    
    // Create cell for first name
    const firstNameCell: HTMLTableDataCellElement = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid #ddd';
    firstNameCell.style.padding = '12px';
    
    // Create cell for location
    const locationCell: HTMLTableDataCellElement = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid #ddd';
    locationCell.style.padding = '12px';
    
    // Append cells to row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    
    // Append row to table body
    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Add the table to the document body
  document.body.appendChild(table);
}

// Function to initialize the application
function init(): void {
  // Create a title for the page
  const title: HTMLHeadingElement = document.createElement('h1');
  title.textContent = 'Student List';
  title.style.fontFamily = 'Arial, sans-serif';
  title.style.color = '#333';
  title.style.textAlign = 'center';
  
  document.body.appendChild(title);
  
  // Render the table
  renderTable();
}

// Wait for DOM to be fully loaded before running
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export the interface and array for potential use in other modules
export { Student, studentsList };

