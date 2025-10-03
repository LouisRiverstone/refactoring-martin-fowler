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

if (import.meta.main) console.log("before", new B().common());
