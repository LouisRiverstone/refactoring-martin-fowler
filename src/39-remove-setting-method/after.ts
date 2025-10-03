class Config {
	constructor(public value: number) {}
}
export const cfg = new Config(5);

if (import.meta.main) console.log("39 after", cfg.value);
