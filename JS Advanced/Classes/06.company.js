class Company {

    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, position, department) {
        if (!this.isValid(name)
            || !this.isValid(salary)
            || !this.isValid(position)
            || !this.isValid(department)
            || Number(salary) < 0) {
            throw new Error('Invalid input!');
        }

        let newEployee = {
            name,
            salary,
            position
        };

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push(newEployee);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDep = '';
        let maxSalary = 0;

        for (const [key, value] of Object.entries(this.departments)) {
            let salary = 0;
            value.forEach(e => {
                salary += e.salary;
            })
            salary = salary / value.length;
            if (salary > maxSalary) {
                bestDep = key;
                maxSalary = salary;
            }
        };
        if (bestDep) {
            let result = `Best Department is: ${bestDep}\nAverage salary: ${maxSalary.toFixed(2)}\n`;

            Object.values(this.departments[bestDep]).sort((a, b) => b.salary - a.salary
                || a.name.localeCompare(b.name)).
                forEach(e => {
                    let current = `${e.name} ${e.salary} ${e.position}\n`;
                    result += current;
                })
            return result.trim();
        }
    }

    isValid(property) {
        if (property !== null && property !== '' && property !== undefined) {
            return true;
        }
    }
}