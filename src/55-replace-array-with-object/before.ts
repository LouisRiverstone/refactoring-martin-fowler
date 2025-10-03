// Antes: array de produtos com busca por id
export const products = [
	{ id: 1, name: "A" },
	{ id: 2, name: "B" },
];
export function find(id: number) {
	return products.find((p) => p.id === id);
}

if (import.meta.main) console.log("55 before", find(2));
