export function area(radius: number) {
	const pi = 3.14159;
	return pi * radius * radius;
}

if (import.meta.main) console.log("before area", area(2));
