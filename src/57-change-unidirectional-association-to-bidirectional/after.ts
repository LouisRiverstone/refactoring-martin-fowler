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

if (import.meta.main) {
	const c = new Customer(1, "Ana");
	const o = new Order(1, c);
	console.log("57 after", c.orders.length);
}
