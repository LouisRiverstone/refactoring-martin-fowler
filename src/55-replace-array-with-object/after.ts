export const productsById: Record<number, { id: number; name: string }> = {
	1: { id: 1, name: "A" },
	2: { id: 2, name: "B" },
};
export function find(id: number) {
	return productsById[id];
}

if (import.meta.main) console.log("55 after", find(2));
