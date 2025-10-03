class Customer {
	orders: Order[] = [];
	constructor(
		public id: number,
		public name: string,
	) {}
}
class Order {
	constructor(
		public id: number,
		public customer: Customer,
	) {
		customer.orders.push(this);
	}
}

if (import.meta.main) console.log("58 before: bidirectional example");
