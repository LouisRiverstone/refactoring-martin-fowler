class A {
	x = 1;
}
class B extends A {
	y = 2;
}

if (import.meta.main) console.log("after", new B().x);
