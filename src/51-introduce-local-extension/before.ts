// Antes: repetimos conversões em vários pontos
export function welcome(u: { name: string }) {
	return u.name.toUpperCase();
}

if (import.meta.main) console.log("51 before", welcome({ name: "ana" }));
