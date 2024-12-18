'use client'
import React from 'react';
import InputButton from '@/components/input-components/InputButton';
import InputSelect from '@/components/input-components/InputSelect';
import ToggleButton from '@/components/ToggleButton';

interface ToggleSettings {
	option: string;
	selected: boolean;
}

const feedbacks: ToggleSettings[] = [
	{
		option: 'Send every respondents results in separate email',
		selected: true,
	},
	{ option: 'Show results just after exam ends ', selected: true },
	{ option: 'Review Questions', selected: false },
];

const studentsInfo: ToggleSettings[] = [
	{ option: 'Percentage Score', selected: true },
	{ option: 'Points Score', selected: true },
	{ option: 'Grade', selected: false },
	{ option: 'Correct answers to questions', selected: false },
	{ option: 'Pass or fail message', selected: true },
];

const Grading = () => {
	const onChange = (value:any) => {
		console.log(value);
	};
	return (
		<div className='grid grid-cols-4 grid-rows-4 gap-8'>
			<div className='text-foreground col-span-2 row-span-2'>
				<h1>Grading criteria</h1>
				<div className='flex flex-row gap-7 items-center ml-10 mt-4'>
					<div className='flex flex-row items-center gap-2 text-white'>
						<h2>Pass Mark</h2>
						<InputButton
							placeholder='50'
							classNames='w-[3rem]'
							onChange={onChange}
						/>
					</div>

					<div className='flex flex-row items-center gap-2 text-white'>
						<h2>Unit</h2>
						<InputSelect
							onChange={(value)=>onChange(value)}
							placeholder='%'
							classNames='w-[7rem]'
							options={[
								{ key: 1, optionName: '%' },
								{ key: 2, optionName: 'Units' },
							]}
						/>
					</div>
				</div>
			</div>

			<div className='text-foreground col-span-2 row-span-2 ml-[5rem]'>
				<h1>Information for respondents</h1>
				<div className='flex flex-row gap-7 items-center ml-10 mt-4'>
					<div className='flex flex-col gap-2 text-white'>
						{studentsInfo.map((info, index) => (
							<div
								key={index}
								className='flex flex-row justify-between items-center'
							>
								<h2>{info.option}</h2>
								<ToggleButton
									isOn={info.selected}
									classNames='ml-[4rem] text-lg'
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='text-foreground col-span-3 row-span-2 '>
				<h1>Send Feedback </h1>
				<div className='flex flex-row gap-7 items-center ml-10 mt-4'>
					<div className='flex flex-col gap-2 text-white'>
						{feedbacks.map((feedback, index) => (
							<div
								key={index}
								className='flex flex-row justify-between items-center'
							>
								<h2>{feedback.option}</h2>
								<ToggleButton
									isOn={feedback.selected}
									classNames='ml-[4rem] text-lg'
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Grading;
