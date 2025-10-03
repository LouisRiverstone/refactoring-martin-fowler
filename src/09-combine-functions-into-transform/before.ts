// Transformações sequenciais feitas por funções separadas
export function step1(data: number[]) {
	return data.map((x) => x * 2);
}
export function step2(data: number[]) {
	return data.filter((x) => x > 5);
}

if (import.meta.main) console.log("before", step2(step1([1, 3, 4])));
