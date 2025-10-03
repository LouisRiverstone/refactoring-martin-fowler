export function fee(customer: { isPremium: boolean }) {
	return customer.isPremium ? 0 : 5;
}

if (import.meta.main) console.log("after", fee({ isPremium: false }));
