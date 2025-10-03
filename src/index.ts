import { readdirSync } from "fs";
import { join } from "path";

function listRefactorings() {
	try {
		return readdirSync(".")
			.filter((d) => d.match(/^\d{2}-/))
			.sort();
	} catch (e) {
		return [];
	}
}

async function runExample(id: string | "all" = "all") {
	const items = listRefactorings();
	const chosen = id === "all" ? items : items.filter((x) => x.startsWith(id));
	for (const dir of chosen) {
		console.log("---", dir);
		try {
			await import(`./${dir}/before.ts`);
			await import(`./${dir}/after.ts`);
		} catch (e: any) {
			console.warn("failed to run", dir, e?.message ?? e);
		}
	}
}

if (import.meta.main) {
	const arg = process.argv[2] || "all";
	runExample(arg).then(() => console.log("done"));
}
