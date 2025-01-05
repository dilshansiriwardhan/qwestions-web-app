'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useUser } from '@clerk/nextjs';

export default function Dashboard() {
	const { user } = useUser();
	const router = useRouter();

  const { getToken } = useAuth();
	
	const fetchUserRole = async () => {
		try {

			const token = await getToken();
			console.log(token);
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/user`,
				{
					method: 'POST',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
				}
			);

			if (response.ok) {
				const data = await response.json();
				const { user} = data; 
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
	}, []);
	

	return <div>Loading...</div>;
}


