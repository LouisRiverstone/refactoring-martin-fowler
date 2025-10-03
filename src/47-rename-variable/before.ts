export function calc(a: number, b: number) {
	const x = a + b;
	return x * 2;
}

if (import.meta.main) console.log("47 before", calc(1, 2));
