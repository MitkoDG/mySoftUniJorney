function firedEmployee(employees, index){

    let result = [];

    if (!Array.isArray(employees) || !Number.isInteger(index) || index < 0 || index >= employees.length) {
        throw new Error("Invalid input");
    }
    for (let i = 0; i < employees.length; i++) {
        if (i !== index) {
            result.push(employees[i]);
        }
    }
    console.log(result.join(", "));
}
firedEmployee(["Petar", "Ivan", "George"], 0)