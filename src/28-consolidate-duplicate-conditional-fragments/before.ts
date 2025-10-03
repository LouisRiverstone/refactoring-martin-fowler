export function price(product: { type: string; price: number }) {
	let base = product.price;
	if (product.type === "sale") {
		base = base * 0.8;
		return base + 5;
	}
	if (product.type === "regular") {
		base = base * 1.0;
		return base + 5;
	}
	return base + 5;
}

if (import.meta.main)
	console.log("before", price({ type: "sale", price: 100 }));
