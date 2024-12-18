'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Question from './Question';
import { Button } from '@nextui-org/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import logo from '@/public/logo.png';
import avatar from '@/public/user-avatar.png';
import Link from 'next/link';
import QuestionIndex from './QuestionIndex';

type Exam = {
	examName: string;
};

type Answer = {
	id: number;
	correct: boolean;
	answer: string;
};

type Question = {
	question: string;
	answers: Answer[];
};

const Exam = () => {
	const { id: examId } = useParams();
	const [examName, setExamName] = useState('');
	const [error, setError] = useState('');
	const [questions, setQuestions] = useState<Question[]>([]);
	const [questionNum, setQuestionNum] = useState(1);

	const setNum = (num:number) => {
		setQuestionNum(num);
	}
	useEffect(() => {
		console.log(questionNum);
	}, [questionNum]);

	useEffect(() => {
		const fetchExams = async () => {
			try {
				const examResponse = await fetch(
					`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/exam/${examId}`
				);
				if (!examResponse.ok) {
					throw new Error('Network response was not ok');
				}

				const data: Exam = await examResponse.json();
				setExamName(data.examName);

				const questionResponse = await fetch(
					`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/question/${examId}`
				);
				if (!questionResponse.ok) {
					throw new Error('Questions response was not ok');
				}

				const questionData: Question[] = await questionResponse.json();
				setQuestions(questionData);
			} catch (error: any) {
				setError(error.message);
			}
		};

		fetchExams();
	}, [examId]);

	const maxQuestions = questions.length;

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

						<div>
							<div>
								<QuestionIndex
									questions={maxQuestions}
									questionNum={questionNum}
									setQuestionNum={setQuestionNum}
								/>
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
								<h3 className='text-white pt-2'>Elon Musk</h3>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='basis-5/5 ld:basis-4/5 bg-background w-full h-screen text-base-content px-6 lg:px-12 py-7 relative  overflow-x-scroll scrollbar-hide md:scrollbar-default md:overflow-x-auto'>
				<div>
					<div className='flex py-5 items-center justify-between'>
						<h1 className='text-lg'>{examName}</h1>
						<h1 className='text-green-500'>01 : 38 : 16</h1>
					</div>

					{/* Display error if any */}
					{error && <div className='text-red-500'>{error}</div>}

					{/* Display the current question */}
					<div className='flex w-full justify-center my-[5rem] relative'>
						{questions.length > 0 && questions[questionNum - 1] &&(
							<div className=' w-[55rem]' >
								<Question
									index={questionNum}
									question={
										questions[questionNum - 1].question
									}
									answers={questions[questionNum - 1].answers}
								/>
							</div>
						)}
						<div className='py-4 w-full flex justify-between absolute top-[5rem] '>
							<Button
								className={`${
									questionNum === 1 ? 'opacity-0' : ''
								}`}
								isIconOnly
								onPress={() =>
									setQuestionNum((prev) =>
										Math.max(1, prev - 1)
									)
								}
								isDisabled={questionNum === 1}
								color='primary'
								radius='full'
							>
								<ChevronLeftIcon
									className='size-6 pr-1'
									strokeWidth={3}
								/>
							</Button>

							<Button
								className={`${
									questionNum === maxQuestions
										? 'opacity-0'
										: ''
								}`}
								isIconOnly
								onPress={() =>
									setQuestionNum((prev) =>
										Math.min(maxQuestions, prev + 1)
									)
								}
								isDisabled={questionNum === maxQuestions}
								color='primary'
								radius='full'
							>
								<ChevronRightIcon
									className='size-6 pl-1'
									strokeWidth={3}
								/>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Exam;