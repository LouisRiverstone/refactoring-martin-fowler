// Após: encapsular a variável em getter/setter
let _temperatureC = 25;
export function getTemperatureC() {
	return _temperatureC;
}
export function setTemperatureC(v: number) {
	_temperatureC = v;
}
export function toF() {
	return (getTemperatureC() * 9) / 5 + 32;
}

if (import.meta.main) console.log("after F", toF());
