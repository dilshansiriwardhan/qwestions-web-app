import '../globals.css';
import Image from 'next/image';
import logo from '@/public/logo.png';
import avatar from '@/public/user-avatar.png';
import NavLinks from '@/components/nav-links';
import Link from 'next/link';

export default function Login({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div >
			{children}
		</div>
	);
}
