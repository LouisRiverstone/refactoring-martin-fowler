// Classe inchada com responsabilidades misturadas
export class Employee {
	name: string;
	salary: number;
	department: string;
	constructor(n: string, s: number, d: string) {
		this.name = n;
		this.salary = s;
		this.department = d;
	}
	tax() {
		return this.salary * 0.2;
	}
	deptCode() {
		return this.department.slice(0, 3).toUpperCase();
	}
}

if (import.meta.main)
	console.log("before", new Employee("Ana", 5000, "engineering"));
