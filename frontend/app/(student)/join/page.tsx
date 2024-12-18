'use client';
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout';
import OutlineButton from '@/components/OutlineButton';
import Link from 'next/link';

interface Exam {
	examName: string;
	_id: string;
}

const Join = () => {
	const [examName, setExamName] = useState<Exam[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchExams = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/exam`);

				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				const data: Exam[] = await response.json();
				setExamName(data);
			} catch (error: any) {
				setError(error.message);
			}
		};

		fetchExams(); // Call the function
	}, []);

	if (error) {
		return (
			<Layout>
				<div>{error}</div>
			</Layout>
		);
	}

	return (
		<>
			<Layout>
				<div>
					<h1 className='font-semibold'>Available Exams </h1>
					<div className='pl-5 py-7'>
						{examName.map((exam) => (
							<div
								key={exam._id}
								className='flex flex-row items-center max-w-[20rem] justify-between py-2 content-center'
							>
								<div>{exam.examName}</div>
								<Link href={`test/${exam._id}`}>
									<OutlineButton
										name='Join'
										size='sm'
										active={false}
									/>
								</Link>
							</div>
						))}
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Join;
