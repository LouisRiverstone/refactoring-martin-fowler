export class Account {
	constructor(public balance: number) {}
}

if (import.meta.main) console.log("59 before", new Account(100).balance);
