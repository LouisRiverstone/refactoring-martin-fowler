export function area(radius: number) {
	const pi = Math.PI;
	return pi * radius * radius;
}

if (import.meta.main) console.log("38 after", area(2));
