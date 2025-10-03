class Parent {}
class Child extends Parent {
	shared = 1;
}

if (import.meta.main) console.log("after", new Child().shared);
