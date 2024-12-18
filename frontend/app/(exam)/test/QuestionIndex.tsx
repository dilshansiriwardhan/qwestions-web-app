'use client';
import React, { useEffect, useState } from 'react';

interface QuestionListProps {
	questions: number;
	questionNum: number;
	setQuestionNum: (num: number) => void;
}

const QuestionIndex = ({
	questions,
	setQuestionNum,
	questionNum,
}: QuestionListProps) => {
	return (
		<>
			<div className='items-center w-full p-8 text-center'>
				<div className='py-5'>Question {questions} </div>
				<div className='grid grid-cols-5 gap-3'>
					{Array.from({ length: questions }, (_, index) => (
						<div
							key={index}
							className={`${
								questionNum === index + 1
									? 'bg-sky-500 text-white'
									: ''
							} text-gray-950 font-semibold bg-gray-200 rounded p-1 hover:cursor-pointer hover:bg-sky-500 hover:text-white`}
							onClick={() => setQuestionNum(index + 1)}
						>
							{index + 1}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default QuestionIndex;
