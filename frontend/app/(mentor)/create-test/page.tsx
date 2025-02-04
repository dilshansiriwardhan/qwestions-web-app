import Link from 'next/link';
import React from 'react';
import Layout from '@/components/layout';
import Table from './Table';
import { LightBulbIcon } from '@heroicons/react/24/outline';

const Create = () => {
	return (
		<>
			<Layout>
				<div className='grid grid-cols-4 gap-4 w-full h-[150vw] md:gap-4 md:h-[29rem] md:ml-6 lg:ml-16 md:aspect-[3.5/2]'>
					<div className='bg-content3 rounded-3xl col-span-4 row-span-2 lg:rounded-3xl md:rounded-xl relative overflow-y-scroll'>
						<div className='w-full absolute '>
							<div className='flex justify-between'>
								<h1 className='font-semibold m-5'>
									Last Tests
								</h1>
							</div>
							<Table />
						</div>
					</div>
					<div className='bg- rounded-3xl col-span-4 md:col-span-2 row-start-4 md:row-start-3 bg-gradient-to-r from-[#00FF87] from-20% to-[#4C8DF6]'>
						<Link href={'/create-test/create/configure'}>
							<div className='w-full h-full lg:rounded-3xl md:rounded-xl'>
								<h1 className='font-extrabold absolute text-content3 m-5 text-2xl'>
									Create a Test
								</h1>
							</div>
						</Link>
					</div>
					<div className='bg-content3 rounded-3xl lg:rounded-3xl md:rounded-xl col-span-2 md:col-span-1 relative'>
						<div className='w-full flex flex-col p-5 absolute h-full'>
							<h1>Upcoming Test</h1>
							<div className='absolute bottom-6 '>
								<h1 className='text-3xl '>
									17
									<span className='text-primary text-2xl font-bold'>
										May
									</span>
								</h1>
								<h1>Data Structures</h1>
							</div>
						</div>
					</div>
					<div className='bg-content3 rounded-3xl lg:rounded-3xl md:rounded-xl col-span-2 md:col-span-1 relative'>
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

export default Create;
