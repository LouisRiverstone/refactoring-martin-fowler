function assert(condition: boolean, msg?: string) {
	if (!condition) throw new Error(msg || "assertion failed");
}
export function divide(a: number, b: number) {
	assert(b !== 0, "division by zero");
	return a / b;
}

if (import.meta.main) console.log("34 after", divide(10, 2));
