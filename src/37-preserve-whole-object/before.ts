export function sendInvoice(customer: { address: string }) {
	// extrai apenas o endereço
	const addr = customer.address;
	return `sent to ${addr}`;
}

if (import.meta.main)
	console.log("37 before", sendInvoice({ address: "Rua A" }));
