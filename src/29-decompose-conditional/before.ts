export function charge(order: { quantity: number; itemPrice: number }) {
	if (order.quantity > 100) return order.quantity * order.itemPrice * 0.95;
	if (order.quantity > 50) return order.quantity * order.itemPrice * 0.97;
	return order.quantity * order.itemPrice;
}

if (import.meta.main)
	console.log("before", charge({ quantity: 60, itemPrice: 10 }));
