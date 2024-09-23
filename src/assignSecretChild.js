class AssignSerectChild {
    constructor(employees, previousAssignments) {
        this.employees = employees;
        this.previousAssignments = previousAssignments;
    }

    // Check if an assignment is valid
    isValidAssignment(employee, potentialChild) {
        if (employee.Employee_EmailID === potentialChild.Employee_EmailID) return false;
        return !this.previousAssignments.some(               
            (assignment) =>
                assignment.Employee_EmailID === employee.Employee_EmailID &&
                assignment.Secret_Child_EmailID === potentialChild.Employee_EmailID
        );
    }

    // Generate Secret Santa assignments
    generateAssignments() {
        let assignments = [];
        let availableChildren = [...this.employees];

        for (let employee of this.employees) {
            let validChildren = availableChildren.filter((child) =>
                this.isValidAssignment(employee, child)
            );

            if (validChildren.length === 0) {
                throw new Error('No valid assignments possible. Please retry the process.');
            }

            // Randomly select a secret child from the valid ones
            let selectedChild = validChildren[Math.floor(Math.random() * validChildren.length)];

            assignments.push({
                Employee_Name: employee.Employee_Name,
                Employee_EmailID: employee.Employee_EmailID,
                Secret_Child_Name: selectedChild.Employee_Name,
                Secret_Child_EmailID: selectedChild.Employee_EmailID
            });

            // Remove the selected child from the list of availablechildren
            availableChildren = availableChildren.filter(
                (child) => child.Employee_EmailID !== selectedChild.Employee_EmailID
            );
        
        }

        return assignments;
    }
}

module.exports = AssignSerectChild;
