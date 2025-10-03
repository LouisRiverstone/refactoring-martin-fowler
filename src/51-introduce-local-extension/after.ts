function nameUpper(u: { name: string }) {
	return u.name.toUpperCase();
}
export function welcome(u: { name: string }) {
	return nameUpper(u);
}

if (import.meta.main) console.log("51 after", welcome({ name: "ana" }));
