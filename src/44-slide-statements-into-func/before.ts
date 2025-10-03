export function process(items: number[]) {
	let total = 0;
	for (const i of items) total += i;
	console.log("sum done");
	return total;
}

if (import.meta.main) console.log("44 before", process([1, 2, 3]));
