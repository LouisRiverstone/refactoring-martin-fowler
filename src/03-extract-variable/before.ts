export function finalPrice(items: number[], taxRate: number) {
	return items.reduce((s, v) => s + v, 0) * (1 + taxRate) + 10;
}

if (import.meta.main)
	console.log("before finalPrice", finalPrice([10, 20], 0.1));
