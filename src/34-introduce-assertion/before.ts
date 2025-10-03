export function divide(a: number, b: number) {
	if (b === 0) throw new Error("division by zero");
	return a / b;
}

if (import.meta.main) console.log("34 before", divide(10, 2));
