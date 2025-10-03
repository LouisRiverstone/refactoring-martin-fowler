export function greet() {
	return "hello";
}

if (import.meta.main) console.log("60 after", greet());
