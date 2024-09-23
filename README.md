# Secret Santa Assignment Generator

## Overview
This Node.js program generates Secret Santa assignments, ensuring that no employee gets the same person as the previous year and that employees don’t assign themselves.

## How to Run

### Requirements:
- Node.js (version >= 14)
- Excel files for employees and previous assignments

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/abishek23rui/secret-santa.git
   cd secret-santa

2.Install dependencies:
    npm install

3.Running the Program
    npm run start


Solution Flow :

ReadAndWriteFiles Class:
    Responsible for reading and writing files.
    Contains readExcelFile and writeSecretSantaAssignmentsToExcel methods.

EmployeeManager Class:
    Manages employee data by reading the employee list from the Excel file.
    Contains a method readEmployees to get employee data.

AssignSerectChild Class:
    Responsible for generating valid Secret Santa assignedList like not to (Previously assigned  and not assigning to themselves).
    Contains isValidAssignment to check if an assignment is valid and generateAssignments to create the Secret Santa pairs.