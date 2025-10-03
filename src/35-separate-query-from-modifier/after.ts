let lastOrderId = 0;
export function isFreeShipping(items: any[]) {
	const total = items.reduce((s: any, i: any) => s + i.price, 0);
	return total > 100;
}

export function createOrder(items: any[]) {
	if (isFreeShipping(items)) lastOrderId++;
	const total = items.reduce((s: any, i: any) => s + i.price, 0);
	return { orderId: lastOrderId, total };
}

if (import.meta.main)
	console.log("35 after", createOrder([{ price: 60 }, { price: 50 }]));
