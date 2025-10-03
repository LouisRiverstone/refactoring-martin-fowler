class Parent {
	greet() {
		return "hello";
	}
}
class Child extends Parent {
	override greet() {
		return "hello";
	}
}

if (import.meta.main) console.log("before", new Child().greet());
