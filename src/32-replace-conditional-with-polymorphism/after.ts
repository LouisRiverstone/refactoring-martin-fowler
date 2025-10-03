abstract class Contract {
	abstract pay(): number;
}
class Hourly extends Contract {
	constructor(
		private hours: number,
		private rate: number,
	) {
		super();
	}
	pay() {
		return this.hours * this.rate;
	}
}
class Salaried extends Contract {
	constructor(private salary: number) {
		super();
	}
	pay() {
		return this.salary;
	}
}

export function payContract(c: Contract) {
	return c.pay();
}

if (import.meta.main) console.log("32 after", payContract(new Hourly(10, 15)));
