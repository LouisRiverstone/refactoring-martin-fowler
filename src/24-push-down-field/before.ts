class Parent {
	shared = 1;
}
class Child extends Parent {
	specific = 2;
}

if (import.meta.main) console.log("before", new Child().shared);
