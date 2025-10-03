export function total(items: number[]) {
	const derived = items.reduce((s, i) => s + i, 0);
	return derived * 1.1;
}

if (import.meta.main) console.log("56 before", total([1, 2, 3]));
