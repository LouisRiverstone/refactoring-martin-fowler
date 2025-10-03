// Exemplo: cálculo de pagamento com switch por tipo de contrato
type Contract = {
	type: "hourly" | "salaried";
	hours?: number;
	rate?: number;
	salary?: number;
};
export function pay(contract: Contract) {
	if (contract.type === "hourly") {
		return (contract.hours || 0) * (contract.rate || 0);
	} else {
		return contract.salary || 0;
	}
}

if (import.meta.main)
	console.log("32 before", pay({ type: "hourly", hours: 10, rate: 15 }));
