'use client';
import React, { forwardRef, useImperativeHandle,useEffect, useState } from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { Checkbox } from '@nextui-org/react';
import { Textarea, Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';

type AnswerProps = {
   id: number;
   correct: boolean;
   answer: string;
};

type QuestionProps = {
   questionNumber: number;
};

export type ChildHandle = {
   getQuestion: string;
   getAnswers:AnswerProps[];
 };

const Question = forwardRef<ChildHandle, QuestionProps>(({ questionNumber }, ref) => {
   const [answers, setAnswers] = useState<AnswerProps[]>([
      { id: 1, correct: false, answer: '' },
      { id: 2, correct: false, answer: '' },
   ]);

   const [question , setQuestion] = useState('');

   useEffect(() => {
      console.log('Answers updated:', answers);
    }, [answers]);

   useImperativeHandle(ref, () => ({
      getQuestion:question,
      getAnswers:answers,
    }));

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

   const handleCheckboxChange = (id: number, checked: boolean) => {
      setAnswers((prevAnswers) =>
         prevAnswers.map((answer) =>
            answer.id === id ? { ...answer, correct: checked } : answer
         )
      );
   };

   const handleClick = () => {
      setAnswers([
         ...answers,
         { id: answers.length + 1, correct: false, answer: '' },
      ]);
   };

   const onAnswerChange = (id: number, value: string) => {
      setAnswers((prevAnswers) =>
         prevAnswers.map((answer) =>
            answer.id === id ? { ...answer, answer: value } : answer
         )
      );
   };

   const onQuestionChange = (value:string) => {
      setQuestion(value);
   }

   return (
      <div className='relative'>
         <div className='flex flex-col gap-5'>
            <div className=''>
               <div>
                  <h1 className='font-semibold text-foreground mb-4'>
                     Question {questionNumber}
                  </h1>
                  <Textarea
                     isRequired
                     className='max-w-m'
                     labelPlacement='outside'
                     placeholder='Enter the Question'
                     onValueChange={(value: string) => onQuestionChange(value)}
                  />
               </div>
            </div>
            <div>
               {answers.map((answer, index) => (
                  <div className='mb-2 flex flex-row' key={answer.id}>
                     <Checkbox
                        color='success'
                        isSelected={answer.correct}
                        onChange={(e) => handleCheckboxChange(answer.id, e.target.checked)}
                     ></Checkbox>
                     <Input
                        key={answer.id}
                        placeholder={`Answer ${answer.id}`}
                        type='text'
                        size='sm'
                        onValueChange={(value: string) => onAnswerChange(answer.id , value)}
                     />
                     <XCircleIcon
                        className='size-6 text-red-600 m-1 hover:cursor-pointer'
                        onClick={(e) => handleDelete(answer.id)}
                     />
                  </div>
               ))}
               <div className='w-full mt-4'>
                  <Button
                     color='primary'
                     variant={'flat'}
                     className='text-foreground w-full'
                     onClick={handleClick}
                  >
                     Add
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
});


Question.displayName = "Question";
export default Question;
