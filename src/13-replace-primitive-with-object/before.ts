// Antes: uso de primitive para representar dinheiro
export function formatMoney(amount: number) {
	return "$" + amount.toFixed(2);
}

if (import.meta.main) console.log("before", formatMoney(10));
