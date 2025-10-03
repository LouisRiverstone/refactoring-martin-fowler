export function sendInvoice(customer: { address: string }) {
	return `sent to ${customer.address}`; // usa o objeto todo em vez de extrair partes
}

if (import.meta.main)
	console.log("37 after", sendInvoice({ address: "Rua A" }));
