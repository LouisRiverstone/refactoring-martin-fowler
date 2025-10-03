export function sendEmail(opts: {
	to: string;
	subject: string;
	body: string;
	cc?: string;
}) {
	return opts;
}

if (import.meta.main)
	console.log("after", sendEmail({ to: "a@a", subject: "hi", body: "hello" }));
