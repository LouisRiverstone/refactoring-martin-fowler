// Antes: duas fases misturadas
export function process(items: number[]) {
	const filtered = items.filter((x) => x > 0);
	return filtered.map((x) => x * 2);
}

if (import.meta.main) console.log("before", process([-1, 2, 3]));
