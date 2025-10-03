// Antes: criar novos objetos para cada referência, queremos referência única
export function makeCount() {
	return { v: 0 };
}

if (import.meta.main) console.log("54 before", makeCount());
