'use client';
import React from 'react';
import {
	Tabs,
	Tab,
	Card,
	CardBody
} from '@nextui-org/react';
import General from './General';
import Results from './Results';
import Grading from './Grading';

export default function App() {
	return (
		<div className='flex flex-col px-4'>
			<div className='flex w-full flex-col'>
				<Tabs aria-label='Options' placement='top' >
					<Tab key='Genaral' title='Genaral'>
						<Card className='w-full'>
							<CardBody >
								<General />
							</CardBody>
						</Card>
					</Tab>
					<Tab key='grading' title='Grading'>
						<Card>
							<CardBody>
								<Grading/>
							</CardBody>
						</Card>
					</Tab>
					<Tab key='results' title='Results'>
						<Card>
							<CardBody>
								<Results />
							</CardBody>
						</Card>
					</Tab>
				</Tabs>
			</div>
		</div>
	);
}
