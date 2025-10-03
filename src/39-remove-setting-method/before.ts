class Config {
	value = 1;
	set(v: number) {
		this.value = v;
	}
}
export const cfg = new Config();

if (import.meta.main) {
	cfg.set(5);
	console.log("39 before", cfg.value);
}
