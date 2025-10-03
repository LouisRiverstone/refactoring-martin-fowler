type RoleCode = "admin" | "user";
export function access(role: RoleCode) {
	return role === "admin" ? "all" : "restricted";
}

if (import.meta.main) console.log("before", access("user"));
