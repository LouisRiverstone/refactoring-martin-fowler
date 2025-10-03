abstract class User {
	abstract access(): string;
}
class Admin extends User {
	access() {
		return "all";
	}
}
class Normal extends User {
	access() {
		return "restricted";
	}
}

if (import.meta.main) console.log("after", new Normal().access());
