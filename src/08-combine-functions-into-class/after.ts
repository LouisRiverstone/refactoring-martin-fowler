export class Cart {
	items: any[] = [];
	add(item: any) {
		this.items.push(item);
	}
}

if (import.meta.main) {
	const c = new Cart();
	c.add({ id: 1 });
	console.log("after", c);
}
