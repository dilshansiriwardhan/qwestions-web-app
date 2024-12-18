/* eslint-disable */
import { ForwardRefExoticComponent, SVGProps } from 'react';
import React from 'react';
import Link from 'next/link';
import { linkList, mentorLinks, studentLinks } from '@/constants/index';

interface NavProps {
	type: 'mentor' | 'student';
}
const NavLinks = ({ type }: NavProps) => {
	let links = linkList;

	if (type === 'mentor') {
		links = mentorLinks;
	} else {
		links = studentLinks;
	}

	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className='flex md:h-[48px] grow items-center text-foreground md:gap-2 rounded-md  p-3 text-xs font-semibold hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
					>
						<LinkIcon className='w-6 font-semibold mr-1' />
						<p className='relative md:top-[0.09rem]'>{link.name}</p>
					</Link>
				);
			})}
		</>
	);
};

export default NavLinks;
