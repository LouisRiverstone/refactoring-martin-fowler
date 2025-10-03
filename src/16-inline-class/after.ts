export function total(amount: number) {
	return amount * 1.2;
}

if (import.meta.main) console.log("after", total(100));
