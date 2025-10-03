class Users {
	private list: any[] = [];
	add(u: any) {
		this.list.push(u);
	}
	getAll() {
		return [...this.list];
	}
}

export const users = new Users();
if (import.meta.main) {
	users.add({ name: "C" });
	console.log("after", users.getAll().length);
}
