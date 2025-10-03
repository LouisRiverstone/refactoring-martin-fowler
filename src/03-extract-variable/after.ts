export function finalPrice(items: number[], taxRate: number) {
	const subtotal = items.reduce((s, v) => s + v, 0);
	const tax = subtotal * taxRate;
	const shipping = 10;
	return subtotal + tax + shipping;
}

if (import.meta.main)
	console.log("after finalPrice", finalPrice([10, 20], 0.1));
