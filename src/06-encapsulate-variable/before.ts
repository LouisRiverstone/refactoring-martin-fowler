// Antes: acesso direto à variável que deveria ser encapsulada
export let temperatureC = 25;

export function toF() {
	return (temperatureC * 9) / 5 + 32;
}

if (import.meta.main) console.log("before F", toF());
