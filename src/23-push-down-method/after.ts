class Parent {
	/* moved method down */
}
class Child extends Parent {
	greet() {
		return "hello";
	}
}

if (import.meta.main) console.log("after", new Child().greet());
