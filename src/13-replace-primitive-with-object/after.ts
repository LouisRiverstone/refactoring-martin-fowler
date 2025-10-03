class Money {
	constructor(private cents: number) {}
	format() {
		return "$" + (this.cents / 100).toFixed(2);
	}
}

export function formatMoney(amount: number) {
	return new Money(amount * 100).format();
}

if (import.meta.main) console.log("after", formatMoney(10));
