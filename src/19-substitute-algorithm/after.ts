// Nova implementação mais eficiente/exata
export function compute(items: number[]) {
	// por exemplo, uso de algoritmo honesto
	return items.length ? items.reduce((s, x) => s + x, 0) : 0;
}

if (import.meta.main) console.log("after", compute([1, 2, 3]));
