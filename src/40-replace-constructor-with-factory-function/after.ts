class User {
	private constructor(
		public name: string,
		public email: string,
	) {}
	static create(name: string, email: string) {
		if (!email.includes("@")) throw new Error("invalid email");
		return new User(name, email);
	}
}

if (import.meta.main) console.log("40 after", User.create("Ana", "a@a"));
