// Antes: cliente precisa verificar condição especial sempre
export function shippingCost(country: string | null) {
	if (!country) return 0;
	if (country === "BRA") return 10;
	return 25;
}

if (import.meta.main) console.log("33 before", shippingCost(null));
