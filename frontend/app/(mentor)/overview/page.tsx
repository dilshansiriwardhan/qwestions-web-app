'use client';
import React from 'react';
import Layout from '@/components/layout';
import { ArrowUpCircleIcon, PlusIcon } from '@heroicons/react/24/outline';

const Overview = () => {
	return (
		<>
			<Layout>
				<div className='grid grid-cols-2 md:grid-cols-3 text-xl  gap-4 w-full h-[120vw] md:gap-8 md:h-[29rem] md:ml-6 lg:ml-16 md:aspect-[3.5/2] '>
					<div className='bg-primary rounded-2xl  lg:rounded-3xl md:rounded-xl relative'>
						<div className='w-full flex justify-between p-6 absolute'>
							<h1>Students</h1>
							<div>
								<PlusIcon className='size-6 text-white' />
							</div>
						</div>
						<div className='w-[14rem] absolute '>
						</div>
					</div>
					<div className='bg-content3 rounded-2xl  lg:rounded-3xl md:rounded-xl relative'>
						<div className='w-full flex flex-col p-6 absolute h-full'>
							<h1>Upcoming Test</h1>
							<div className='absolute bottom-6 '>
								<h1 className='text-5xl '>
									17
									<span className='text-primary text-4xl font-bold'>
										May
									</span>
								</h1>
								<h1 className='text-medium'>Data Structures</h1>
							</div>
						</div>
					</div>
					<div className='bg-content3 rounded-2xl  lg:rounded-3xl md:rounded-xl relative'>
						<div className='w-full flex flex-col p-6 absolute h-full'>
							<div className='flex justify-between'>
								<h1>Learner Progress</h1>
							</div>

							<div className='absolute bottom-6'>
								<span className='text-green-400 flex gap-1 text-5xl'>
									<ArrowUpCircleIcon
										style={{ transform: 'rotate(45deg)' }}
										className='size-7 text-green-400'
									/>{' '}
									24%
								</span>
								<h1 className='text-content2 text-medium'>
									This Month (Apr 2024)
								</h1>
							</div>
						</div>
					</div>
					<div className='bg-content3 rounded-2xl  lg:rounded-3xl row-start-3 md:row-start-auto col-span-2 md:rounded-xl'></div>
					<div className='bg-white rounded-2xl  lg:rounded-3xl md:rounded-xl relative'>
						
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Overview;
