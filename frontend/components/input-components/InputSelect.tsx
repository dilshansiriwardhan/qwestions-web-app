'use client';
import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';

interface Options {
   key: number;
   optionName: string;
}
interface ButtonProps {
   label?: string;
   options: Options[];
   placeholder?:string;
   classNames? : string;
   onChange:	(currentKey?: string) => void;
}

const InputSelect = ({ label, options, placeholder , classNames , onChange}: ButtonProps) => {
   return (
      <>
         <div >
            <Select
               labelPlacement='outside'
               label={label}
               placeholder={placeholder ? placeholder : 'Select an options'}
               className={`${classNames} max-w-xs text-foreground font-semibold `}
               onSelectionChange = {(e) => onChange(e.currentKey)}
            >
               {options.map((option) => (
                  <SelectItem
                     key={option.key}
                     className='text-foreground'
                  >
                     {option.optionName}
                  </SelectItem>
               ))}
            </Select>
         </div>
      </>
   );
};

export default InputSelect;
