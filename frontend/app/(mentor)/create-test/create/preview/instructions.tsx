import React from 'react'

const instructions = [
  'The exam lasts 1 hour',
  'The exam includes multiple-choice and written questions',
  'Once submitted, no changes are allowed.',
]

const Instructions = () => {
  return (
    <div className='flex justify-center'>
      <div className='text-center w-[30rem] '>
        <h2 className='text-2xl font-semibold text-content2'>Machine Learning</h2>
        <h1 className='text-4xl font-semibold'>Data Structures and Algorithms</h1>
        <div className='text-left mt-10'>
          <h3>Instructions</h3>
          <div className="ml-[5rem] text-left text-gray-500">
            <ul className='list-disc'>
              {instructions.map((instruction, index) => (
                <li key={index} >
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Instructions