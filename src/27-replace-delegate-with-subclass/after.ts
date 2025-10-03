class Worker {
	do() {
		return "work";
	}
}
class B extends Worker {}

if (import.meta.main) console.log("after", new B().do());
