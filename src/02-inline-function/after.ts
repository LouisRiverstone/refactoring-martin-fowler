// Função em linha: remover função indirection e usar expressão diretamente
export const getName = (user: { first: string; last: string }) =>
	`${user.first} ${user.last}`;

if (import.meta.main)
	console.log("after name:", getName({ first: "Ana", last: "Silva" }));
