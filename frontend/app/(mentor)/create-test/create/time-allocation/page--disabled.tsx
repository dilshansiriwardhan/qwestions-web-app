'use client';
import { useState } from 'react';


export default function TimeAllocation() {
   const [durationType, setDurationType] = useState('test'); // To manage test duration type
   const [activationType, setActivationType] = useState('manual'); // To manage test activation type
   const [timeToCompleteTest, setTimeToCompleteTest] = useState(''); // For manual test time
   const [timeForEachQuestion, setTimeForEachQuestion] = useState(''); // For time per question
   const [testDuration, setTestDuration] = useState(''); // For how long the test will be active
   const [testActivationDate, setTestActivationDate] = useState<string>(''); // Test activation date
   const [accessClosingDate, setAccessClosingDate] = useState<string>(''); // Test closing date

   const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // This will be in "YYYY-MM-DD" format
    setTestActivationDate(value); // Update state directly as string
    setAccessClosingDate(e.target.value); 
  };

  const dateAsObject = testActivationDate ? new Date(testActivationDate) : null;
  console.log(dateAsObject);


   return (
      <div className=''>
         <div className=' mt-0'>
            <h2 className='mb-2'>Test Duration</h2>
            <p className='pl-4 mb-4'>Select test duration measuring method:</p>

            <div className='flex flex-col space-y-4 pl-14'>
               <label className='flex items-center'>
                  <input
                     type='radio'
                     name='durationType'
                     value='test'
                     checked={durationType === 'test'}
                     onChange={() => setDurationType('test')}
                     className='radio radio-primary mr-2'
                  />
                  <span>Time to complete the test</span>
                  <input
                     type='time'
                     className='input input-bordered ml-16 w-36 text-black bg-gray-400'
                     value={timeToCompleteTest}
                     onChange={(e) => setTimeToCompleteTest(e.target.value)}
                     disabled={durationType !== 'test'}
                  />
               </label>

               <label className='flex items-center'>
                  <input
                     type='radio'
                     name='durationType'
                     value='question'
                     checked={durationType === 'question'}
                     onChange={() => setDurationType('question')}
                     className='radio radio-primary mr-2'
                  />
                  <span>Time limit for each test question</span>
                  <input
                     type='time'
                     className='input input-bordered ml-4 w-36 bg-gray-400 text-black'
                     value={timeForEachQuestion}
                     onChange={(e) => setTimeForEachQuestion(e.target.value)}
                     disabled={durationType !== 'question'}
                  />
               </label>
            </div>
         </div>

         <div className='mt-5'>
            <h2 className='mb-4 '>Test Activation Options</h2>

            {/* Manual Activation Option */}
            <label className='flex items-center mb-2 pl-14'>
               <input
                  type='radio'
                  name='activationType'
                  value='manual'
                  checked={activationType === 'manual'}
                  onChange={() => setActivationType('manual')}
                  className='radio radio-primary mr-2'
               />
               <span>Manual test activation</span>
               <span className='ml-9'>Test will remain for</span>
               <input
                  type='time'
                  className='input input-bordered ml-6 w-36 bg-gray-400 text-black '
                  value={testDuration}
                  onChange={(e) => setTestDuration(e.target.value)}
                  disabled={activationType !== 'manual'}
               />
            </label>

            <label className='flex items-center mb-2 pl-14'>
               <input
                  type='radio'
                  name='activationType'
                  value='timePeriod'
                  checked={activationType === 'timePeriod'}
                  onChange={() => setActivationType('timePeriod')}
                  className='radio radio-primary mr-2'
               />
               <span>Activation in a set time period</span>
            </label>

            <div className='flex flex-col space-y-4 ml-6 pl-64'>
               <label className='flex-col space-x-4'>
                  <span>Test Activation Date</span>
                  <input
                     type='date'
                     className='input input-bordered w-36 bg-gray-400 text-black pl-5'
                     value={testActivationDate} // Directly pass string value
                     onChange={handleDateChange} // Handle change event
                     disabled={activationType !== 'timePeriod'}
                  />
               </label>

               <label className='flex-col space-x-4'>
                  <span>Access Closing Date</span>
                  <input
                     type='date'
                     className='input input-bordered w-36 bg-gray-400 text-black'
                     value={accessClosingDate}
                     onChange={(e) => setAccessClosingDate(e.target.value)}
                     disabled={activationType !== 'timePeriod'}
                  />
               </label>
            </div>
         </div>
      </div>
   );
}
