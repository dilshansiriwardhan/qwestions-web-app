'use client';

import React from 'react';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignIn = () => {
	const router = useRouter();

	const handleNavigation = (path: string) => {
		router.push(path);
	};

	return (
		<div className='flex flex-col gap-10 justify-center items-center h-dvh'>
			<h1 className='text-2xl font-bold'>Enter As a</h1>
			<div className='flex flex-col gap-5 content-center max-w-[9rem]'>
				<Link href='/api/auth/signin?callbackUrl=/overview'>
					<Button color='primary'>Mentor</Button>
				</Link>
				<Link href='/api/auth/signin?callbackUrl=/join'>
					<Button
						color='secondary'
						onPress={() => handleNavigation('')}
					>
						Student
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default SignIn;
