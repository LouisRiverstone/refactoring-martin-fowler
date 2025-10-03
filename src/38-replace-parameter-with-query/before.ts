// Antes: função recebe parâmetro derivado
export function area(radius: number, pi: number) {
	return pi * radius * radius;
}

if (import.meta.main) console.log("38 before", area(2, 3.14159));
