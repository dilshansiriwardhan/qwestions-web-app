import React, { useState } from 'react';
import NavLinks from './nav-links';
import Hamburger from 'hamburger-react';
import { usePathname } from 'next/navigation';

import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	Button,
} from '@nextui-org/react';

const PopOver = () => {
	const [isOpen, setOpen] = useState(false);
	const content = (
		<PopoverContent>
			<div className='flex flex-col justify-start'>
				<NavLinks type='mentor'/>
			</div>
		</PopoverContent>
	);

	const handleClick = () => {
		setOpen(true);
	};

	const placement = 'bottom-end';
	return (
		<div>
			<Popover key={placement} placement={placement} color='secondary'>
				<PopoverTrigger>
					<Button
						variant='light'
						className='capitalize'
						disableRipple
					>
						{/* {placement.replace('-', ' ')} */}
						<Hamburger
							toggled={isOpen}
							onToggle={() => handleClick()}
						/>
					</Button>
				</PopoverTrigger>
				{/* <NavLinks/> */}
				{content}
			</Popover>
		</div>
	);
};

export default PopOver;
