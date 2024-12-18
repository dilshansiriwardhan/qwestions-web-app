'use client'
import React from 'react';
import { DatePicker } from '@nextui-org/date-picker';

interface DateProps {
   classNames?: string;
   label:string;
}

const datePickerClasses: Partial<
   Record<
      | 'base'
      | 'selectorButton'
      | 'selectorIcon'
      | 'popoverContent'
      | 'calendar'
      | 'calendarContent'
      | 'timeInputLabel'
      | 'timeInput',
      string
   >
> = {
    base: '',
 
};

const DateInput = ({ label, classNames }: DateProps) => {
   return (
      <div className={classNames}>
         {/* <input type="date" className='input input-bordered w-[12rem]' {...props} /> */}
         <DatePicker
            label={label}
            className='max-w-[250px]'
            classNames={datePickerClasses}
            labelPlacement={'outside-left'}
            variant='flat'
         />
      </div>
   );
};

export default DateInput;
