import React from 'react';
import Question from './Question';

const questions = [
   {
      question: 'What is the primary goal of supervised learning?',
      answers: [
         { answer: 'To cluster data into groups', isCorrect: false },
         { answer: 'To predict labels based on input data', isCorrect: true },
         { answer: 'To find hidden patterns in data', isCorrect: false },
         { answer: 'To reduce the dimensionality of data', isCorrect: false },
      ],
   },
   {
      question: 'Which of the following is a type of unsupervised learning?',
      answers: [
         { answer: 'Classification', isCorrect: false },
         { answer: 'Regression', isCorrect: false },
         { answer: 'Clustering', isCorrect: true },
         { answer: 'All of the above', isCorrect: false },
      ],
   },
   {
      question: 'What is the primary goal of supervised learning?',
      answers: [
         { answer: 'To cluster data into groups', isCorrect: false },
         { answer: 'To find hidden patterns in data', isCorrect: false },
      ],
   },
   {
      question: 'What is the primary goal of supervised learning?',
      answers: [
         { answer: 'To cluster data into groups', isCorrect: false },
         { answer: 'To find hidden patterns in data', isCorrect: false },
      ],
   },
   {
      question: 'Which of the following is a type of unsupervised learning?',
      answers: [
         { answer: 'Classification', isCorrect: false },
         { answer: 'Regression', isCorrect: false },
         { answer: 'Clustering', isCorrect: true },
         { answer: 'All of the above', isCorrect: false },
      ],
   },
];

const Questions = () => {
   return (
      <div>
         <div className='h-[25rem] overflow-y-auto '>
            {questions.map((question, index) => (
               <div className='my-4 pr-4' key={index}>
                  <Question
                     question={question.question}
                     answers={question.answers}
                     index={index}
                  />
               </div>
            ))}
         </div>
      </div>
   );
};

export default Questions;
