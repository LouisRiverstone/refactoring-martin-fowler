export function phase1(items: number[]) {
	return items.filter((x) => x > 0);
}
export function phase2(items: number[]) {
	return items.map((x) => x * 2);
}
export function process(items: number[]) {
	return phase2(phase1(items));
}

if (import.meta.main) console.log("after", process([-1, 2, 3]));
