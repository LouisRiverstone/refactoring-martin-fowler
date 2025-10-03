// Antes: função que encapsula operação com estado complexo
export function executeTransfer(
	accountFrom: any,
	accountTo: any,
	amount: number,
) {
	if (accountFrom.balance < amount) throw new Error("insufficient");
	accountFrom.balance -= amount;
	accountTo.balance += amount;
}

if (import.meta.main) console.log("41 before");
