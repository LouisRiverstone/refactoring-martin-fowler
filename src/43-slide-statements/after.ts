export function calc(a: number, b: number) {
	let result = (a + b) * 2; // statements slid into expression
	return result;
}

if (import.meta.main) console.log("43 after", calc(2, 3));
