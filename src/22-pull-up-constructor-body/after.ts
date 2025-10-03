class A {
	constructor() {
		/* central init */
	}
}
class B extends A {
	constructor() {
		super();
	}
}

if (import.meta.main) console.log("after constructors ok");
