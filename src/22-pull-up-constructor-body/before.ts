class A {
	constructor() {
		/*...*/
	}
}
class B extends A {
	constructor() {
		super(); /* duplicated init */
	}
}

if (import.meta.main) console.log("before constructors ok");
