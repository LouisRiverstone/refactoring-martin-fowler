// Antes: manipulação direta de objetos (records)
export function fullName(u: { first: string; last: string }) {
	return u.first + " " + u.last;
}

if (import.meta.main)
	console.log("before", fullName({ first: "Luiz", last: "G" }));
