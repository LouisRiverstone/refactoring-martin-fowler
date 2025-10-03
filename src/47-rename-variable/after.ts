export function calc(a: number, b: number) {
	const sum = a + b;
	return sum * 2;
}

if (import.meta.main) console.log("47 after", calc(1, 2));
