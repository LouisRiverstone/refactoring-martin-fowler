export class Account {
	private _balance: number;
	constructor(balance: number) {
		this._balance = balance;
	}
	get balance() {
		return this._balance;
	}
	deposit(v: number) {
		this._balance += v;
	}
}

if (import.meta.main) {
	const a = new Account(100);
	a.deposit(50);
	console.log("59 after", a.balance);
}
