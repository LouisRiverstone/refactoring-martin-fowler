function derived(items: number[]) {
	return items.reduce((s, i) => s + i, 0);
}
export function total(items: number[]) {
	return derived(items) * 1.1;
}

if (import.meta.main) console.log("56 after", total([1, 2, 3]));
