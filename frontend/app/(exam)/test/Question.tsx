import React from 'react';

interface _Answer {
	answer: string;
	correct: boolean;
	id: number;
}

interface _Question {
	question: string;
	answers: _Answer[];
    index:number;
}

const Question = ({ question, answers, index }: _Question) => {
	return (
		<div className='bg-[#0b0b0c] rounded-lg px-6 py-4'>
			<div key={index}>
				<h1>Question {index}</h1>
				<h3 className='mt-[1rem]'>{question}</h3>
				<div className='ml-[3rem] mt-[1rem]'>
					<div className='grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-1'>
						{answers.map((answer, key) => (
							<div key={key}>
								<div>
									<span>{key + 1} . </span>
									{answer.answer}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Question;
