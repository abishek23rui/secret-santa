const xlsx = require('xlsx');

class ReadAndWriteFiles {
    // Read employees or previous assignments from an Excel file
    static readExcelFile(filePath) {
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
        return data;
    }

    // Write Secret Santa Assignments to a new Excel file
    static writeSecretSantaAssignmentsToExcel(assignments, outputPath) {
        const worksheet = xlsx.utils.json_to_sheet(assignments);
        const workbook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(workbook, worksheet, 'Secret Santa Assignments');
        xlsx.writeFile(workbook, outputPath);
    }
}

module.exports = ReadAndWriteFiles;
