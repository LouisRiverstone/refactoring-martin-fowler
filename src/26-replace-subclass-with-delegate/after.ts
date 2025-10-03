class Worker {
	do() {
		return "work";
	}
}
class B {
	delegate: Worker;
	constructor() {
		this.delegate = new Worker();
	}
	do() {
		return this.delegate.do();
	}
}

if (import.meta.main) console.log("after", new B().do());
