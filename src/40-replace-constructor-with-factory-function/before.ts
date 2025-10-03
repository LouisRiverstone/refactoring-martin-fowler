// Antes: construtor faz validações complexas e lógica
export class User {
	constructor(
		public name: string,
		public email: string,
	) {
		if (!email.includes("@")) throw new Error("invalid email");
	}
}

if (import.meta.main) console.log("40 before", new User("Ana", "a@a"));
