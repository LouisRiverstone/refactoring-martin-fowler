class Engine {
	start() {
		return "vroom";
	}
}
class Car {
	constructor(private engine: Engine) {}
	start() {
		return this.engine.start();
	}
}
export function startCar(c: Car) {
	return c.start();
}

if (import.meta.main) console.log("after", startCar(new Car(new Engine())));
