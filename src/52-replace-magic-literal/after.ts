export const HTTP = { OK: 200, NOT_FOUND: 404 } as const;
export function isOk(code: number) {
	return code === HTTP.OK;
}

if (import.meta.main) console.log("52 after", isOk(HTTP.OK));
