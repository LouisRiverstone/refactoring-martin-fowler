export function getBasePrice(item: { price: number; discount: number }) {
	const base = item.price - item.discount; // still explicit for clarity
	return base * 1.2; // in many cases, we extract a query function instead
}

// Versão alternativa usando função query:
export function base(item: { price: number; discount: number }) {
	return item.price - item.discount;
}
export function getBasePriceQuery(item: { price: number; discount: number }) {
	return base(item) * 1.2;
}

if (import.meta.main)
	console.log("after 14", getBasePriceQuery({ price: 100, discount: 10 }));
