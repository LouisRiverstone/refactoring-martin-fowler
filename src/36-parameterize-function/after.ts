export function greet(name: string, options: { uppercase?: boolean } = {}) {
	return options.uppercase ? name.toUpperCase() : name;
}

if (import.meta.main)
	console.log("36 after", greet("ana", { uppercase: true }));
