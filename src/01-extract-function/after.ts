// Após extrair funções para separar responsabilidades
function sumItems(items: Array<{ price: number; quantity: number }>) {
	return items.reduce((s, it) => s + it.price * it.quantity, 0);
}

function shippingCost(total: number) {
	return total > 100 ? 0 : 10;
}

export function totalPrice(
	items: Array<{ price: number; quantity: number }>,
	taxRate: number,
) {
	const total = sumItems(items);
	const tax = total * taxRate;
	return total + tax + shippingCost(total);
}

if (import.meta.main)
	console.log("after total:", totalPrice([{ price: 10, quantity: 2 }], 0.1));
