export class Product {
	constructor(public p: number) {}
}

if (import.meta.main) console.log("49 before", new Product(5).p);
