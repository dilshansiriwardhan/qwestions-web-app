'use client'
import { QuestionFormProps } from "@/types/models";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewQuestion from "./NewQuestion";

export default function QuestionManager(){
    const [questions, setQuestions] = useState<
		{ id: string; data?: QuestionFormProps }[]
	>([
		{
			id: uuidv4(),
			data: {
				question: '',
				answers: [
					{ num: 1, correct: false, answer: '' },
					{ num: 2, correct: false, answer: '' },
				],
			},
		},
	]);
    
    const addQuestion = () => {
		setQuestions((prev) => [
			...prev,
			{
				id: uuidv4()
			},
		]);
	};

    const deleteQuestion = (id: string) => {
		setQuestions((prev) => prev.filter((question) => question.id !== id));
	};

    return(
        <div>
			<div>
				<Button
					color='primary'
					variant='flat'
					className='text-foreground w-full'
					onClick={() => {console.log('save')}}
				>
					Save
				</Button>
			</div>
			{questions.map((question, index) => (
				<div
					key={question.id}
					className='p-[2rem] border-1 rounded-lg my-5'
				>
					<NewQuestion
						questionId={question.id}
						data={question.data ? question.data : undefined}
						questionNumber={index + 1}
						deleteQuestion={() => deleteQuestion(question.id)}
					/>
				</div>
			))}
			<div className='w-full mt-4'>
				<Button
					color='primary'
					variant='flat'
					className='text-foreground w-full'
					onClick={addQuestion}
				>
					Add Question
				</Button>
			</div>
		</div>
    )
}