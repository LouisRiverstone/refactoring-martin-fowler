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

if (import.meta.main) console.log("42 before");
