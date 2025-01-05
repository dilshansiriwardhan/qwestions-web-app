import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';

export async function POST(req: Request) {
	const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

	if (!WEBHOOK_SECRET) {
		throw new Error(
			'Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local'
		);
	}

	// Get the headers
	const headerPayload = headers();
	const svix_id = headerPayload.get('svix-id');
	const svix_timestamp = headerPayload.get('svix-timestamp');
	const svix_signature = headerPayload.get('svix-signature');

	// If there are no headers, error out
	if (!svix_id || !svix_timestamp || !svix_signature) {
		return new Response('Error occurred -- no svix headers', {
			status: 400,
		});
	}

	// Get the body
	const payload = await req.json();
	const body = JSON.stringify(payload);

	// Create a new Svix instance with your secret.
	const wh = new Webhook(WEBHOOK_SECRET);

	let evt: WebhookEvent;

	// Verify the payload with the headers
	try {
		evt = wh.verify(body, {
			'svix-id': svix_id,
			'svix-timestamp': svix_timestamp,
			'svix-signature': svix_signature,
		}) as WebhookEvent;
	} catch (err) {
		console.error('Error verifying webhook:', err);
		return new Response('Error occurred', {
			status: 400,
		});
	}

	const eventType = evt.type;

	if (eventType === 'user.created') {
		const { id, email_addresses, first_name, last_name, image_url } =
			evt.data;

		if (!id || !email_addresses) {
			return new Response('Error occurred -- missing data', {
				status: 400,
			});
		}

		const user = {
			clerkUserId: id,
			email: email_addresses[0].email_address,
			...(first_name ? { name: first_name + last_name } : {}),
			role: 'student',
		};
		// const fetch = await createUser(user)
		// console.log(fetch)
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/user`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(user),
				}
			);
			if (response.ok) {
				console.log('Data saved successfully!');
			} else {
				const errorDetails = await response.text(); // or response.json() if JSON response
				console.error(
					`Failed to save data! Status: ${response.status}, Response: ${errorDetails}`
				);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}

	return new Response('', { status: 200 });
}
