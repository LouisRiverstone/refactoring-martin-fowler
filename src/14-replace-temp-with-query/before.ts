// Replace Temp with Query - before: usa variável temporária que guarda expressão
export function getBasePrice(item: { price: number; discount: number }) {
	const base = item.price - item.discount;
	return base * 1.2;
}

if (import.meta.main)
	console.log("before 14", getBasePrice({ price: 100, discount: 10 }));
