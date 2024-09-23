const xlsx = require('xlsx');
const Papa = require('papaparse');
const fs = require('fs');

class ReadAndWriteFiles {

    // Read employees or previous assignments from an Csv file
    static readCsvFile(filePath) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const data = Papa.parse(fileContent, {
            header: true,
            dynamicTyping: true
        });
        return data.data;
    }

    // Write Secret Santa Assignments to a new Csv file
    static writeSecretSantaAssignmentsToCsv(assignments, outputPath) {
        try {
            // Convert JSON to CSV
            const csv = Papa.unparse(assignments); 

            // Write to file
            fs.writeFileSync(outputPath, csv, 'utf8');
        } catch (error) {
            console.error('Error writing to CSV file:', error);
        }
    }
    
}

module.exports = ReadAndWriteFiles;
