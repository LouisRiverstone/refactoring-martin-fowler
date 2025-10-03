export function stats(nums: number[]) {
	const sum = nums.reduce((s, n) => s + n, 0);
	const avg = sum / nums.length;
	return avg;
}

if (import.meta.main) console.log("48 after", stats([1, 2, 3]));
