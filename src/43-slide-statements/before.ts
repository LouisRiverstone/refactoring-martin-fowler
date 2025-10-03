export function calc(a: number, b: number) {
	let result = a + b;
	result = result * 2;
	return result;
}

if (import.meta.main) console.log("43 before", calc(2, 3));
