export function fee(customer: { isPremium: boolean }) {
	if (customer.isPremium) return 0;
	else return 5;
}

if (import.meta.main) console.log("before", fee({ isPremium: false }));
