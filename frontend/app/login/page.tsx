'use client';
import React, { useEffect, useState } from 'react';
// import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
// import Link from 'next/link';
import {
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
	useSession,
	useUser,
} from '@clerk/nextjs';

const SignIn = () => {
	const session  = useUser();
	const router = useRouter();
	console.log(session);
	useEffect(() => {
		if (session.isSignedIn) {
			router.push('/dashboard');
		}
	}, [session]);
	return (
		<div className='flex flex-col gap-10 justify-center items-center h-dvh'>
			<div>
				<SignedOut>
					<SignInButton mode='modal' />
				</SignedOut>
				<SignedIn></SignedIn>
			</div>
		</div>
	);
};

export default SignIn;
