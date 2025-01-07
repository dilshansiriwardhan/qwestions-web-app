'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useUser } from '@clerk/nextjs';

type UserData = {
    clerkUserId?: string | null;
    email?: string | null;
    userName?: string | null;
};

export default function Dashboard() {
	const { user } = useUser();
	const router = useRouter();

	const { getToken } = useAuth();
	console.log(user);

	let data:UserData;

	if(user){
		data = {
			clerkUserId: user?.id,
			email: user?.primaryEmailAddress?.emailAddress,
			userName: user?.fullName,
		};
	}

	const fetchUserRole = async () => {
		try {
			const token = await getToken();
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/user`,
				{
					method: 'POST',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				}
			);

			if (response.ok) {
				const data = await response.json();
				const { user } = data;
				const role = user.role;
				console.log(data);
				if (role === 'student') {
					router.push('/join');
				} else if (role === 'mentor') {
					router.push('/overview');
				} else if (role === 'admin') {
					router.push('/admin');
				} else {
					console.error('Unknown role:', role);
				}
			} else {
				console.error(
					'Failed to fetch user role:',
					response.statusText
				);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	useEffect(() => {
		fetchUserRole();
	}, [user]);

	return <div>Loading...</div>;
}
