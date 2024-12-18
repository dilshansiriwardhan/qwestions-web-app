'use client'
import React from 'react';
import InputButton from '@/components/input-components/InputButton';
import InputSelect from '@/components/input-components/InputSelect';

interface Option {
   key: number;
   optionName: string;
}

const options : Option[]= [
   { key: 1, optionName: 'Machine Learning' },
   { key: 2, optionName: 'Data Structures and Machine Learning' },
   { key: 3, optionName: 'Database management systems' },
   { key: 4, optionName: 'Discrete Mathematics' },
   { key: 5, optionName: 'Software Engineering' },
];

const languages: Option[] = [
   { key: 1, optionName: 'English' },
   { key: 2, optionName: 'Sinhala' },
];

const Instructions = () => {
   const onChange = (value:any) => {
		console.log(value);
	};
   return (
      <div>
         <div className='flex flex-row w-full gap-6'>
            <div className='basis-2/6'>
               <InputButton label='Test Name' onChange={(value)=>onChange(value)}/>
            </div>

            <div className='basis-2/6'>
               <InputSelect label='Category' options={options} onChange={(value)=>onChange(value)}/>
            </div>

            <div className='basis-2/6'>
               <InputSelect label='Language' options={languages} onChange={(value)=>onChange(value)}/>
            </div>
         </div>
      </div>
   );
};

export default Instructions;
