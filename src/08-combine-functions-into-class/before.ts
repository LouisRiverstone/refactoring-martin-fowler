// Duas funções relacionadas mas espalhadas
export function createCart() {
	return { items: [] as any[] };
}
export function addItem(cart: any, item: any) {
	cart.items.push(item);
}

if (import.meta.main) {
	const c = createCart();
	addItem(c, { id: 1 });
	console.log("before", c);
}
