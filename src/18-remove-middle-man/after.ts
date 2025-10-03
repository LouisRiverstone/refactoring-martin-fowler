class Destination {
	greet() {
		return "hi";
	}
}
// Removido middle-man e chamado direto no cliente

if (import.meta.main) console.log("after", new Destination().greet());
