'use client';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import QuestionNew from './(old)/QuestionNew';
import { Button } from '@nextui-org/button';
import { QuestionFormProps } from '@/types/models';
import { useGetQuestions, useSendQuestions } from '@/data/questions';

const examId = '6780570f811eaf8dd06567c4';

const QuestionManager = () => {
	
	const [questions, setQuestions] = useState<
		{ id: string; data: QuestionFormProps }[]
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

	const { mutate: sendQuestionData } = useSendQuestions();
	const { data } = useGetQuestions(examId);

	// useEffect(() => {
	// 	if (!(data?.length == 0)) {
	// 		console.log(data)
	// 		const transformedQuestions = data?.map((question) => ({
	// 			id: question.questionId,
	// 			data: question,
	// 		}));
	// 		setQuestions(transformedQuestions as any);
	// 	}
	// }, [data]);

	const handleAutosave = (id: string, data: QuestionFormProps) => {
		setQuestions((prev) => ({
			...prev,
			[id]: data,
		  }));
		console.log('Autosaved question:', data);
	};

	const addQuestion = () => {
		setQuestions((prev) => [
			...prev,
			{
				id: uuidv4(),
				data: {
					question: '',
					answers: [
						{ num: 1, correct: false, answer: '' },
						{ num: 2, correct: false, answer: '' },
					],
				} as QuestionFormProps,
			},
		]);
	};

	const deleteQuestion = (id: string) => {
		setQuestions((prev) => prev.filter((q) => q.id !== id));
	};

	useEffect(() => {
		console.log('Questions:', questions);
	}, [questions]);

	// useEffect(() => {
	// 	console.log('Data:', data);
	// }, [data]);

	useEffect(() => {
		if (data) {
			// sendQuestionData({ examId, questions });
		}
	}, [questions]);

	const saveQuestions = () => {
		sendQuestionData({ examId, questions });
	};
	return (
		<div>
			<div>
				<Button
					color='primary'
					variant='flat'
					className='text-foreground w-full'
					onClick={saveQuestions}
				>
					Save
				</Button>
			</div>
			{questions.map((question, index) => (
				<div
					key={question.id}
					className='p-[2rem] border-1 rounded-lg my-5'
				>
					<QuestionNew
						questionId={question.id}
						data={question.data}
						questionIndex={index + 1}
						deleteQuestion={() => deleteQuestion(question.id)}
						onAutosave={(data) => handleAutosave(question.id, data)}
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
	);
};

export default QuestionManager;
