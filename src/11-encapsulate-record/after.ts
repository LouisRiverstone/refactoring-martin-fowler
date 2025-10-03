class Person {
	constructor(private data: { first: string; last: string }) {}
	fullName() {
		return this.data.first + " " + this.data.last;
	}
}

export function fullName(u: { first: string; last: string }) {
	return new Person(u).fullName();
}

if (import.meta.main)
	console.log("after", fullName({ first: "Luiz", last: "G" }));
