export function used() {
	return 2;
}

if (import.meta.main) console.log("45 after", used());
