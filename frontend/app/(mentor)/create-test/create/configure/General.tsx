import { useCreateExam } from '@/data/questions';
import {
	Checkbox,
	Chip,
	DatePicker,
	Input,
	TimeInput,
} from '@nextui-org/react';
import React, { useState } from 'react';
import { getLocalTimeZone, parseDate, Time } from '@internationalized/date';
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const General = () => {
	const [exam, setExam] = useState('');
	const { mutate: createExam } = useCreateExam();
	const [answers, setAnswers] = useState([
		{ id: 1, answer: 'The exam lasts 1 hour' },
		{ id: 2, answer: '' },
	]);
	const [categories, setCategories] = useState([
		{ id: 1, name: 'Computer Science', selected: true },
		{ id: 2, name: 'English', selected: false },
		{ id: 3, name: 'Commerce', selected: false },
	]);
	const [isSelected, setIsSelected] = useState(false);
	const [value, setValue] = React.useState(parseDate('2024-04-04'));
	const saveExam = () => {
		createExam({ examName: exam });
	};

	const handleClick = () => {
		setAnswers([...answers, { id: answers.length + 1, answer: '' }]);
	};
	const handleDelete = (id: number) => {
		setAnswers((prevAnswers) => {
			const updatedAnswers = prevAnswers.filter(
				(answer) => answer.id !== id
			);
			return updatedAnswers.map((answer, index) => ({
				...answer,
				id: index + 1,
			}));
		});
	};
	const onAnswerChange = (id: number, value: string) => {
		setAnswers((prevAnswers) =>
			prevAnswers.map((answer) =>
				answer.id === id ? { ...answer, answer: value } : answer
			)
		);
	};
	return (
		<div className='flex flex-col w-full gap-6 p-4'>
			<div className='flex items-center gap-6'>
				<span className='text-right w-[8rem]'>
					<h1>Test Name</h1>
				</span>
				<span className='w-full'>
					<Input
						placeholder=''
						value={exam}
						onValueChange={setExam}
					/>
				</span>
			</div>
			<div className='flex items-center gap-6'>
				<span className='text-right w-[8rem]'>
					<h1>Category</h1>
				</span>
				<span className='w-full'>
					<input
						type='text'
						name='category'
						list='categories'
						className='bg-default-100 focus:bg-default-100 text-white rounded-xl hover:bg-default-200 focus:outline-none block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					/>

					<datalist id='categories'>
						{categories.map((category: any) => (
							<option value={category.name} key={category.id} />
						))}
					</datalist>
				</span>
			</div>
			<div className='flex items-center gap-6'>
				<span className='text-right w-[8rem] text-sm'>
					<h1>Time to Complete</h1>
				</span>
				<span className='w-full'>
					<TimeInput
						defaultValue={new Time(0o1, 0o0)}
						granularity='minute'
						hourCycle={24}
					/>
				</span>
			</div>
			<div className='flex items-center  gap-6'>
				<span className='text-right w-[8rem] flex justify-end gap-3'>
					<div>
						<Checkbox
							color='success'
							isSelected={isSelected}
							onValueChange={setIsSelected}
							className='p-0 m-0'
						>
							Schedule
						</Checkbox>
					</div>
					{/* <h1>Schedule</h1> */}
				</span>
				<span className='w-full'>
					<div className='flex gap-3 w-[10rem] '>
						<div className='flex gap-3'>
							<span>
								<DatePicker
									size='sm'
									label='From'
									labelPlacement='outside-left'
									value={value}
									onChange={setValue}
									isDisabled={!isSelected}
								/>
							</span>
							<span>
								<TimeInput
									size='sm'
									defaultValue={new Time(14, 0o0)}
									label={null}
									isDisabled={!isSelected}
								/>
							</span>
						</div>
						<div className='flex ml-5 gap-3'>
							<span>
								<DatePicker
									size='sm'
									label='To'
									labelPlacement='outside-left'
									value={value}
									onChange={setValue}
									isDisabled={!isSelected}
								/>
							</span>
							<span>
								<TimeInput
									size='sm'
									defaultValue={new Time(16, 0o0)}
									label={null}
									isDisabled={!isSelected}
								/>
							</span>
						</div>
					</div>
				</span>
			</div>
			<div className='flex items-start gap-6'>
				<span className='text-right w-[8rem]'>
					<h1>Instructions</h1>
				</span>
				<span className='w-full'>
					<div className='flex flex-col gap-0.5 text-white w-full'>
						{answers.map((answer, index) => (
							<div
								className='mb-2 flex flex-row gap-2'
								key={answer.id}
							>
								<Input
									key={answer.id}
									placeholder={`Instruction ${answer.id}`}
									defaultValue={answer.answer}
									type='text'
									size='sm'
									onValueChange={(value: string) =>
										onAnswerChange(answer.id, value)
									}
								/>
								<XCircleIcon
									className='size-6 m-1 text-red-500 hover:cursor-pointer'
									onClick={(e) => handleDelete(answer.id)}
								/>
							</div>
						))}
					</div>
					<div>
						<Chip
							size='sm'
							color='warning'
							startContent={<PlusCircleIcon className='size-4' />}
							variant='flat'
							onClick={handleClick}
							className='hover:cursor-pointer'
						>
							Add
						</Chip>
					</div>
				</span>
			</div>
			<div className='flex items-start gap-6'>
				<span className='text-right w-[8rem]'>
					<h1>Test Options</h1>
				</span>
				<span className='w-full'>
					<div>
						<Checkbox color='success' size='md'>
							Randomize Questions
						</Checkbox>
					</div>
					<div>
						<Checkbox size='md'>Cannot Copy</Checkbox>
					</div>
					<div>
						<Checkbox size='md'>Review Questions</Checkbox>
					</div>
				</span>
			</div>
		</div>
	);
};

export default General;
