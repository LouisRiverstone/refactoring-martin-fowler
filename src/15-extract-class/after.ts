class Department {
	constructor(public name: string) {}
	code() {
		return this.name.slice(0, 3).toUpperCase();
	}
}

export class Employee {
	dept: Department;
	constructor(
		public name: string,
		public salary: number,
		deptName: string,
	) {
		this.dept = new Department(deptName);
	}
	tax() {
		return this.salary * 0.2;
	}
	deptCode() {
		return this.dept.code();
	}
}

if (import.meta.main)
	console.log("after", new Employee("Ana", 5000, "engineering"));
