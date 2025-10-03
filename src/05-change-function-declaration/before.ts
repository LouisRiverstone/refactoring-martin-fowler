// Antes: função com vários parâmetros posicional
export function createUser(first: string, last: string, age: number) {
	return { first, last, age };
}

if (import.meta.main) console.log("before", createUser("João", "Silva", 30));
