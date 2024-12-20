import React from 'react';
import Layout from '@/components/layout';
import Table from './Table';
import { PlusIcon } from '@heroicons/react/16/solid';
import { LightBulbIcon, UserPlusIcon } from '@heroicons/react/24/outline';

const Students = () => {
	return (
		<>
			<Layout>
				<div className='grid grid-cols-4 gap-4 w-full h-[150vw] md:gap-3 md:h-[29rem] md:ml-6 lg:ml-16 md:aspect-[3.5/2]'>
					<div className='bg-content3 rounded-3xl col-span-4 row-span-2 lg:rounded-3xl md:rounded-xl relative overflow-y-scroll'>
						<div className='w-full absolute '>
							<div className='flex justify-between'>
								<h1 className='font-semibold m-5'>Students</h1>
							</div>
							<Table />
						</div>
					</div>
					<div className='bg-content3 rounded-3xl md:col-span-2 row-start-4 md:row-start-auto col-span-4'></div>
					<div className='bg-[#00FF87] rounded-3xl col-span-2 md:col-span-1 relative'>
						<div className='absolute m-5 text-content3 w-full h-full'>
							<h1 className='font-semibold'>Add Students</h1>
							<div>
								<UserPlusIcon className='size-10 text-content3 mt-10 absolute right-10' />
							</div>
						</div>
					</div>
					<div className='bg-content3 rounded-3xl col-span-2 md:col-span-1 relative'>
						<div className='p-5 absolute text-sm h-full'>
							<h1>
								Mentor can view an Analysis of past Results here
							</h1>
							<div className='absolute bottom-6 right-6'>
								<div className='bg-gray-900 rounded-full p-2'>
									<LightBulbIcon className='size-6 text-white' />
								</div>
							</div>
						</div> 
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Students;
