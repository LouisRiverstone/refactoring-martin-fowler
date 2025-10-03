export function stats(nums: number[]) {
	let temp = nums.reduce((s, n) => s + n, 0);
	temp = temp / nums.length;
	return temp;
}

if (import.meta.main) console.log("48 before", stats([1, 2, 3]));
