// Há um delegate exposto que não deveria ser visível
class Engine {
	start() {
		return "vroom";
	}
}
class Car {
	constructor(public engine: Engine) {}
}
export function startCar(c: Car) {
	return c.engine.start();
}

if (import.meta.main) console.log("before", startCar(new Car(new Engine())));
