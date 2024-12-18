'use client';

import React from 'react';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';

const SignIn = () => {
	const router = useRouter();

	const handleNavigation = (path: string) => {
		router.push(path);
	};

	return (
		<div className='flex flex-col gap-10 justify-center items-center h-dvh'>
			<h1 className='text-2xl font-bold'>Enter As a</h1>
			<div className='flex flex-col gap-5 content-center max-w-[9rem]'>
				<Button
					color='primary'
					onPress={() => handleNavigation('/overview')}
				>
					Mentor
				</Button>
				<Button
					color='secondary'
					onPress={() => handleNavigation('/join')}
				>
					Student
				</Button>
			</div>
		</div>
	);
};

export default SignIn;