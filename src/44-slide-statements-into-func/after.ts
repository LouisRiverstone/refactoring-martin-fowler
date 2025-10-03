function logDone() {
	console.log("sum done");
}
export function process(items: number[]) {
	const total = items.reduce((s, i) => s + i, 0);
	logDone();
	return total;
}

if (import.meta.main) console.log("44 after", process([1, 2, 3]));
