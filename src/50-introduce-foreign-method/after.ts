// Em JS/TS podemos estender via prototype (não recomendado), mas exemplo didático
declare global {
	interface String {
		shout?(): string;
	}
}
if (!String.prototype.shout)
	String.prototype.shout = function () {
		return this.toUpperCase() + "!";
	};

if (import.meta.main) {
	const s = "a" as any;
	console.log(
		"50 after",
		typeof s.shout === "function" ? s.shout() : s.toUpperCase(),
	);
}
