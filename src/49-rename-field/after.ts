export class Product {
	constructor(public price: number) {}
}

if (import.meta.main) console.log("49 after", new Product(5).price);
