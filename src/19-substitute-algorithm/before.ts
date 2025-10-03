// Substitui algoritmo: antes algoritmo simples
export function compute(items: number[]) {
	return items.reduce((s, x) => s + x, 0);
}

if (import.meta.main) console.log("before", compute([1, 2, 3]));
