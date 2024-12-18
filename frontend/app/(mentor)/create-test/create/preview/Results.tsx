import React from 'react';
import TwoNumbers from '@/components/TwoNumbers';

const Results = () => {
   return (
      <div className='flex justify-center '>
         <div>
            <h1 className='text-4xl mt-[5rem] mb-[2rem]'>Thank you for Joining the Exam</h1>
            <div className='flex justify-center'>
               <TwoNumbers
                  leftItem='89'
                  leftLabel='Marks'
                  rightItem='A+'
                  rightLabel='Grade'
                  topColor='primary'
                  bottomColor='gray'
               />
            </div>
         </div>
      </div>
   );
};

export default Results;
