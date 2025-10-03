class TransferCommand {
	constructor(
		private from: any,
		private to: any,
		private amount: number,
	) {}
	execute() {
		if (this.from.balance < this.amount) throw new Error("insufficient");
		this.from.balance -= this.amount;
		this.to.balance += this.amount;
	}
}

if (import.meta.main) {
	const a = { balance: 100 },
		b = { balance: 0 };
	new TransferCommand(a, b, 50).execute();
	console.log("41 after", a, b);
}
