export function greet(name: string, uppercase: boolean) {
	return uppercase ? name.toUpperCase() : name;
}

if (import.meta.main) console.log("36 before", greet("ana", false));
