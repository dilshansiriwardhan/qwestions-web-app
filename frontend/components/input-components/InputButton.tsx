'use client'
import React from 'react';
import { Input } from '@nextui-org/input';

interface ButtonProps {
   label?: string;
   placeholder?: string;
   classNames?:string;
   onChange:	(event:string) => void;
}

const InputButton = ({ label, placeholder , classNames , onChange}: ButtonProps) => {
   return (
      <div>

         <div className={`flex flex-col gap-2`}>
            <div className='flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4'>
               <Input
                  key={'outside'}
                  type='email'
                  label={label}
                  labelPlacement={'outside'}
                  placeholder={`${placeholder ? placeholder : ' '}`}
                  className={`${classNames} font-semibold`}
                  onChange={(e) => onChange(e.target.value)}
               />
            </div>
         </div>
      </div>
   );
};

export default InputButton;
