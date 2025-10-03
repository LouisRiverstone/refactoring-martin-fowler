class Customer {
	constructor(
		public id: number,
		public name: string,
	) {}
}
class Order {
	constructor(
		public id: number,
		public customerId: number,
	) {}
}
const ordersByCustomer: Record<number, Order[]> = {};
function addOrder(o: Order) {
	(ordersByCustomer[o.customerId] ||= []).push(o);
}

if (import.meta.main) {
	const c = new Customer(1, "Ana");
	addOrder(new Order(1, c.id));
	const arr = ordersByCustomer[c.id] || [];
	console.log("58 after", arr.length);
}
