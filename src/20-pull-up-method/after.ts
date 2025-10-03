// Método pull-up: se método duplicado entre subclasses, mova para superclass
class A {
	common() {
		return "a";
	}
}
class B extends A {
	specific() {
		return "b";
	}
}

if (import.meta.main) console.log("after", new B().common());
