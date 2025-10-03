export function process(value: number | null) {
	if (value !== null) {
		if (value > 0) {
			return "positive";
		} else {
			return "non-positive";
		}
	}
	return "no-value";
}

if (import.meta.main) console.log("31 before", process(5));
