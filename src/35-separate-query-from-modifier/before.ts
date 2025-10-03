// Antes: função que consulta e também altera estado
let lastOrderId = 0;
export function processOrder(items: any[]) {
	const total = items.reduce((s: any, i: any) => s + i.price, 0);
	if (total > 100) lastOrderId++;
	return { orderId: lastOrderId, total };
}

if (import.meta.main)
	console.log("35 before", processOrder([{ price: 60 }, { price: 50 }]));
