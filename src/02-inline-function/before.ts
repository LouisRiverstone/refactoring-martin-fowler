// Função pequena que apenas delega
export function getName(user: { first: string; last: string }) {
	return `${user.first} ${user.last}`;
}

if (import.meta.main)
	console.log("before name:", getName({ first: "Ana", last: "Silva" }));
