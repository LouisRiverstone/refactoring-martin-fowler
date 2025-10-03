export function process(value: number | null) {
	if (value === null) return "no-value";
	if (value > 0) return "positive";
	return "non-positive";
}

if (import.meta.main) console.log("31 after", process(5));
