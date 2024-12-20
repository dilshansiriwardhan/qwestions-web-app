/* eslint-disable */
import '../globals.css';
import Image from 'next/image';
import logo from '@/public/logo.png';
import avatar from '@/public/user-avatar.png';
import NavLinks from '@/components/nav-links';
import Link from 'next/link';


export default function Mentor({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex flex-row'>
			<div className='basis-1/5 bg-content3 h-screen hidden md:block pt-5 sm:text-xs'>
				<div className='flex justify-center '>
					<div>
						<div className='flex flex-row w-100 justify-center items-stretch'>
							<Image src={logo} alt='official logo' width={80} />
							<h1 className='text-white content-center font-bold relative -left-5 '>
								Qwestions
							</h1>
						</div>

						<div className='mt-8'>
							<div>
								<NavLinks type='mentor'/>
							</div>
						</div>

						<div className='flex flex-col items-center webkit-center text-center'>
							<div className='absolute bottom-11'>
								<div className='border-2 border-sky-500 rounded-full w-fit'>
									<Link href={'/dashboard'}>
										<Image
											src={avatar} // Path to your image file
											alt='profile pic'
											width={40}
										></Image>
									</Link>
								</div>
								<h3 className='text-white pt-2'>Dilshan Siriwardhane</h3>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='basis-5/5 ld:basis-4/5 bg-background w-full h-screen text-base-content px-6 lg:px-12 py-7 relative  overflow-x-scroll scrollbar-hide md:scrollbar-default md:overflow-x-auto'>
				{children}
			</div>
		</div>
	);
}
