export function sendEmail(
	to: string,
	subject: string,
	body: string,
	cc?: string,
) {
	return { to, subject, body, cc };
}

if (import.meta.main) console.log("before", sendEmail("a@a", "hi", "hello"));
