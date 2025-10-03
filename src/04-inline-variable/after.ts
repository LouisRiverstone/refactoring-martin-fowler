export function area(radius: number) {
	return 3.14159 * radius * radius; // inlining pi
}

if (import.meta.main) console.log("after area", area(2));
