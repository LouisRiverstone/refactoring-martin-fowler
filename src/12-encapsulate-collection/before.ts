export let users = [{ name: "A" }, { name: "B" }];
export function add(u: any) {
	users.push(u);
}

if (import.meta.main) {
	add({ name: "C" });
	console.log("before", users.length);
}
