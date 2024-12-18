import React from 'react';

interface classNames{
    [key:string]:string;
}

interface Element {
   leftItem: string;
   leftLabel: string;
   rightItem: string;
   rightLabel: string;

   topColor?: keyof typeof classNames;
   bottomColor?: keyof typeof classNames;
}

const classNames = {
    primary:'text-primary',
    white:'text-white',
    gray:'text-content2'
}

const TwoNumbers = (element: Element) => {
   const { topColor = 'primary', bottomColor='gray' } = element;

   return (
      <div>
         <div className='flex flex-row text-center'>
            <div className='flex flex-col border-r-1 border-content2 pr-4'>
               <span className={`${classNames[topColor]} text-3xl font-bold`}>{element.leftItem}</span>
               <span className={`${classNames[bottomColor]} `}>{element.leftLabel}</span>
            </div>
            <div className='flex flex-col border-l-1 border-content2 pl-4'>
               <span className={`${classNames[topColor]} text-3xl font-bold`}>{element.rightItem}</span>
               <span className={`${classNames[bottomColor]} `}>{element.rightLabel}</span>
            </div>
         </div>
      </div>
   );
};

export default TwoNumbers;
