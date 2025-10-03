const shared = { v: 0 };
export function getShared() {
	return shared;
}

if (import.meta.main) console.log("54 after", getShared());
