class Order {
	constructor(
		public id: number,
		public customer: any,
	) {}
}
class Customer {
	constructor(
		public id: number,
		public name: string,
	) {}
}

if (import.meta.main)
	console.log("57 before", new Order(1, new Customer(1, "Ana")));
