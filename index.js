const ReadAndWriteFiles = require('./src/readAndWriteFiles');
const EmployeeManager = require('./src/employeeManager');
const AssignSerectChild = require('./src/assignSecretChild');

// Main function to execute the Secret Santa assignment process
async function main() {
    try {
        
        // Create EmployeeManager instance and read employees
        const employeeList = new EmployeeManager('assets/Employee-List.xlsx');
        if (employeeList.employees.length === 0) {
            console.log('No employees found. Please provide a valid employee list.');
            return;
        } else if (employeeList.employees.length === 1) {
            console.log('Only one employee found. Secret Santa requires at least two participants.');
            return;
        }

        // Read previous Year Assigned Data from Excel File
        const previousAssignmentsData = ReadAndWriteFiles.readExcelFile('assets/Secret-Santa-Game-Result-2023.xlsx');
        const previousAssignedData = previousAssignmentsData.map(row => ({
            Employee_Name: row.Employee_Name,
            Employee_EmailID: row.Employee_EmailID,
            Secret_Child_Name: row.Secret_Child_Name,
            Secret_Child_EmailID: row.Secret_Child_EmailID
        }));

        // Create AssignSerectChild instance and generate Secretchild
        const assignmentManager = new AssignSerectChild(employeeList.employees, previousAssignedData);
        const assignedList = assignmentManager.generateAssignments();

        // Write the Assigned Secretchild to an Excel file
        ReadAndWriteFiles.writeSecretSantaAssignmentsToExcel(assignedList, 'outputFiles/serectChildOutputFile.xlsx');

        console.log('Assigned Secretchild For All Employees successfully! Please Check Excel!');

    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
