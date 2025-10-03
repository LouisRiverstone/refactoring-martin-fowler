class NoCountry {
	isNoCountry() {
		return true;
	}
	shipping() {
		return 0;
	}
}
class Country {
	constructor(private code: string) {}
	isNoCountry() {
		return false;
	}
	shipping() {
		return this.code === "BRA" ? 10 : 25;
	}
}

export function shippingCost(countryCode: string | null) {
	const c = countryCode ? new Country(countryCode) : new NoCountry();
	return c.shipping();
}

if (import.meta.main) console.log("33 after", shippingCost(null));
