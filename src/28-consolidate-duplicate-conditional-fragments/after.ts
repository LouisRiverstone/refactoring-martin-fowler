export function price(product: { type: string; price: number }) {
	const adjust = product.type === "sale" ? 0.8 : 1.0;
	const base = product.price * adjust;
	return base + 5;
}

if (import.meta.main) console.log("after", price({ type: "sale", price: 100 }));
