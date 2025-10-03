class A {
	do() {
		return "a";
	}
}
class B extends A {
	override do() {
		return "b";
	}
}

if (import.meta.main) console.log("before", new B().do());
