export function isOk(code: number) {
	return code === 200;
}

if (import.meta.main) console.log("52 before", isOk(200));
