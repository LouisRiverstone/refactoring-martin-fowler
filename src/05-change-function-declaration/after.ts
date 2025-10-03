// Após: usar um objeto de opções para melhorar legibilidade e permitir parâmetros opcionais
export function createUser(opts: {
	first: string;
	last: string;
	age?: number;
}) {
	const { first, last, age = 0 } = opts;
	return { first, last, age };
}

if (import.meta.main)
	console.log("after", createUser({ first: "João", last: "Silva" }));
