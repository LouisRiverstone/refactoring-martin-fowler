export class Point {
	constructor(
		public x: number,
		public y: number,
	) {}
}

if (import.meta.main) console.log("53 after", new Point(1, 2));
