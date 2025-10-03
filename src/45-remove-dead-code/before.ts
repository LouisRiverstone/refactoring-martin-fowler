function helper() {
	return 1;
}
export function used() {
	return 2;
}

if (import.meta.main) console.log("45 before", used());
