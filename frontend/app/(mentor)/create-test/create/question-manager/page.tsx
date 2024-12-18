'use client';
import React, { useState, useRef } from 'react';
import Question, { ChildHandle } from './Question';
import OutlineButton from '@/components/OutlineButton';


const examId = '6760865b5a93cfc1eaae6150';

const QwestionManager = () => {
   const [questionNum, setQuestionNum] = useState<number>(1);
   const questionRef = useRef<ChildHandle>(null);

   const handleSave = async () => {
      const questionData = questionRef.current?.getQuestion;
      const answersData = questionRef.current?.getAnswers;

      if (!questionData || !answersData) {
         console.error('Missing data!');
         return;
      }

      const questionPayload = {
         examId:examId,
         question: questionData,
         answers:answersData,
      };
      
      try {
         const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/question`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(questionPayload),
         });

         if (response.ok) {
            console.log('Data saved successfully!');
            setQuestionNum(questionNum + 1);
         } else {
            console.error('Failed to save data!');
         }
      } catch (error) {
         console.error('Error:', error);
      }
   };

   return (
      <div>
         <div className='flex flex-row gap-2 fixed right-[5rem] bottom-[2.3rem] z-10'>
            <OutlineButton
               name='Prev'
               active={false}
            />
            <OutlineButton name='Save' active={true} onclick={handleSave} />
         </div>
         <Question
            key={questionNum}
            questionNumber={questionNum}
            ref={questionRef}
         />
      </div>
   );
};

export default QwestionManager;
