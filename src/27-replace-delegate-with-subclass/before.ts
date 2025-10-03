class Worker {
	do() {
		return "work";
	}
}
class B {
	delegate: Worker = new Worker();
	do() {
		return this.delegate.do();
	}
}

if (import.meta.main) console.log("before", new B().do());
