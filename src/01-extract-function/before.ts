// Exemplo ruim: função longa que faz várias coisas
export function totalPrice(
	items: Array<{ price: number; quantity: number }>,
	taxRate: number,
) {
	let total = 0;
	for (const it of items) {
		total += it.price * it.quantity;
	}
	const tax = total * taxRate;
	const shipping = total > 100 ? 0 : 10;
	return total + tax + shipping;
}

if (import.meta.main)
	console.log("before total:", totalPrice([{ price: 10, quantity: 2 }], 0.1));
