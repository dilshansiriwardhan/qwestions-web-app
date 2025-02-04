import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { Providers } from './providers';

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	preload: true,
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Questions Sign In',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
		>
			<html lang='en' data-theme='dark'>
				<head>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'
					/>
				</head>
				<body
					className={`${poppins.className} antialiased purple-dark `}
				>
					<main><Providers>{children}</Providers></main>
				</body>
			</html>
		</ClerkProvider>
	);
}
