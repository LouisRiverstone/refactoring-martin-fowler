export function transfer(from: any, to: any, amount: number) {
	if (from.balance < amount) throw new Error("insufficient");
	from.balance -= amount;
	to.balance += amount;
}

if (import.meta.main) {
	const a = { balance: 100 },
		b = { balance: 0 };
	transfer(a, b, 50);
	console.log("42 after", a, b);
}
