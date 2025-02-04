import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { Button, Checkbox, Chip, Input, Textarea } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { QuestionFormProps } from '@/types/models';

const QuestionSchema = z.object({
	question: z.string().min(1, 'Question is required'),
	answers: z
		.array(
			z.object({
				num: z.number(),
				correct: z.boolean(),
				answer: z.string().min(1, 'Answer is required'),
			})
		)
		.min(2, 'At least two answers are required'),
});

const QuestionNew = ({
	questionId,
	data,
	onAutosave,
	questionIndex,
	deleteQuestion,
}: {
	questionId: string;
	questionIndex: number;
	deleteQuestion: () => void;
	data?: QuestionFormProps;
	onAutosave: (data: QuestionFormProps) => void;
}) => {
	const [nextId, setNextId] = useState(3);
	const [lastSavedData, setLastSavedData] =
		useState<QuestionFormProps | null>(null);

	const {
		control,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isDirty },
	} = useForm<QuestionFormProps>({
		resolver: zodResolver(QuestionSchema),
		defaultValues: {
			question: data?.question || '',
			answers: data?.answers || [
				{ num: 1, correct: false, answer: '' },
				{ num: 2, correct: false, answer: '' },
			],
		},
		mode: 'onChange',
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'answers',
	});

	const formValues = watch();

	useEffect(() => {
		if (data) {
			setValue('question', data.question);
			setValue('answers', data.answers);
		}
	}, [data, setValue]); // Re-run when `data` changes

	// useEffect(() => {
	// 	// const isDataChanged =
	// 	// 	JSON.stringify(formValues) !== JSON.stringify(lastSavedData);
	// 	handleSubmit((data) => {
	// 		onAutosave(data); // Update the last saved data
	// 	})();
	// 	// console.log(formValues , lastSavedData)
	// 	// if (!isDataChanged && isDirty) {
	// 	// 	const timeout = setTimeout(() => {
	// 	// 		handleSubmit((data) => {
	// 	// 			onAutosave(data);
	// 	// 			setLastSavedData(data); // Update the last saved data
	// 	// 		})();
	// 	// 	}, 1000);

	// 	// 	return () => clearTimeout(timeout);
	// 	// }
	// }, [watch()]);

	// Add answer
	const handleAddAnswer = () => {
		append({ num: nextId, correct: false, answer: '' });
		setNextId((prev) => prev + 1);
	};

	// Delete answer
	const handleDeleteAnswer = (index: number) => {
		remove(index);
	};

	return (
		<div className='relative'>
			<div className='flex flex-col gap-5'>
				<div>
					<div className='flex justify-between'>
						<h1 className='font-semibold text-foreground mb-4'>
							Question {questionIndex}
						</h1>
						<div>
							<Chip
								size='sm'
								color='danger'
								startContent={
									<PlusCircleIcon className='size-4' />
								}
								variant='flat'
								className='hover:cursor-pointer'
								onClick={deleteQuestion}
							>
								Delete Question
							</Chip>
						</div>
					</div>
					<Controller
						name='question'
						control={control}
						render={({ field }) => (
							<Textarea
								isRequired
								className='max-w-m'
								placeholder='Enter the Question'
								aria-label='Question'
								{...field}
							/>
						)}
					/>
					{errors.question && (
						<p className='text-red-500'>
							{errors.question.message}
						</p>
					)}
				</div>

				<div>
					{fields.map((answer, index) => (
						<div
							className='mb-2 flex flex-row'
							key={`${questionId}-${index}`}
						>
							<Controller
								name={`answers.${index}.correct`}
								control={control}
								render={({ field }) => (
									<Checkbox
										color='success'
										isSelected={field.value}
										onChange={(checked) =>
											field.onChange(checked)
										}
									/>
								)}
							/>
							<Controller
								name={`answers.${index}.answer`}
								control={control}
								render={({ field }) => (
									<Input
										aria-label={`Answer ${answer.num}`}
										placeholder={`Answer ${answer.num}`}
										type='text'
										size='sm'
										{...field}
									/>
								)}
							/>
							<XCircleIcon
								className='size-6 text-red-600 m-1 hover:cursor-pointer'
								onClick={() => handleDeleteAnswer(index)}
							/>
						</div>
					))}
					{errors.answers && (
						<p className='text-red-500'>{errors.answers.message}</p>
					)}
					<div className='w-full mt-4'>
						<Chip
							size='sm'
							color='default'
							startContent={<PlusCircleIcon className='size-4' />}
							variant='flat'
							onClick={handleAddAnswer}
							className='hover:cursor-pointer'
						>
							Add Answer
						</Chip>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuestionNew;
