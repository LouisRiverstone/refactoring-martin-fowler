// Classe pequena e desnecessária
class Price {
	constructor(public amount: number) {}
}
export function total(p: Price) {
	return p.amount * 1.2;
}

if (import.meta.main) console.log("before", total(new Price(100)));
