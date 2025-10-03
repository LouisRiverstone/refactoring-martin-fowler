// Antes: middle-man que apenas encaminha
class Destination {
	greet() {
		return "hi";
	}
}
class Middle {
	constructor(public dest: Destination) {}
	greet() {
		return this.dest.greet();
	}
}

if (import.meta.main)
	console.log("before", new Middle(new Destination()).greet());
