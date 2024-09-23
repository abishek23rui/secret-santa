const xlsx = require('xlsx');
const Papa = require('papaparse');
const fs = require('fs');

class ReadAndWriteFiles {

    // Read employees or previous assignments from an Csv file
    static readCsvFile(filePath) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const data = Papa.parse(fileContent, {
            header: true, // Use first row as header
            dynamicTyping: true // Automatically convert numeric values
        });
        return data.data;
    }

    // Write Secret Santa Assignments to a new Csv file
    static writeSecretSantaAssignmentsToCsv(assignments, outputPath) {
        try {
            const csv = Papa.unparse(assignments); // Convert JSON to CSV
            fs.writeFileSync(outputPath, csv, 'utf8'); // Write to file
            console.log(`File written successfully to ${outputPath}`);
        } catch (error) {
            console.error('Error writing to CSV file:', error);
        }
    }
    
}

module.exports = ReadAndWriteFiles;
