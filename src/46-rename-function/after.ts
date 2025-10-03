export function getId(u: any) {
	return u.id;
}

if (import.meta.main) console.log("46 after", getId({ id: 1 }));
