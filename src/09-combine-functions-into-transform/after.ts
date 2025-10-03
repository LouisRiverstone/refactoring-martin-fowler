export function transform(data: number[]) {
	return data.map((x) => x * 2).filter((x) => x > 5);
}

if (import.meta.main) console.log("after", transform([1, 3, 4]));
