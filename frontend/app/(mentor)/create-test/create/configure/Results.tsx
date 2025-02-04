import ToggleButton from '@/components/ToggleButton';
import React from 'react';

interface ToggleSettings {
	option: string;
	selected: boolean;
}

const studentsInfo: ToggleSettings[] = [
	{ option: 'Percentage Score', selected: true },
	{ option: 'Points Score', selected: true },
	{ option: 'Grade', selected: false },
	{ option: 'Correct answers to questions', selected: false },
	{ option: 'Pass or fail message', selected: true },
];


const Results = () => {
	return (
		<div className='text-foreground flex justify-between my-4 mx-5'>
			<div>
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
		</div>
	);
};

export default Results;
