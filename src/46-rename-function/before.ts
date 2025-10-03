// Antes: função com nome pouco claro
export function d(u: any) {
	return u.id;
}

if (import.meta.main) console.log("46 before", d({ id: 1 }));
