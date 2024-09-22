const ReadAndWriteFiles = require('./readAndWriteFiles');

class EmployeeManager {
    constructor(filePath) {
        this.filePath = filePath;
        this.employees = this.readEmployees();
    }

    // Read employees from the Excel file
    readEmployees() {
        const data = ReadAndWriteFiles.readExcelFile(this.filePath);
        return data.map(row => ({
            Employee_Name: row.Employee_Name,
            Employee_EmailID: row.Employee_EmailID
        }));
    }
}

module.exports = EmployeeManager;
