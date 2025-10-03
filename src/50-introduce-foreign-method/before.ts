// Simulação: adicionando método a tipo externo não possível diretamente
export function toUpper(s: string) {
	return s.toUpperCase();
}

if (import.meta.main) console.log("50 before", toUpper("a"));
