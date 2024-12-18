'use client'
import React, { useState, Suspense } from 'react';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';

const Questions = React.lazy(() => import('./Questions'));
const Results = React.lazy(() => import('./Results'));
const Instructions = React.lazy(() => import('./instructions'));

const Preview = () => {
   const [loadedComponent, setLoadedComponent] = useState('Instructions');
   const [radioBtnOn, setRadioBtnOn] = useState(1);

   const handleClick = (component: string , index:number) => {
      setLoadedComponent(component);
      setRadioBtnOn(index);
   };
   return (
      <div>
         <div>
            {loadedComponent === 'Questions' && (
               <Suspense>
                  <Questions />
               </Suspense>
            )}
            {loadedComponent === 'Results' && (
               <Suspense>
                  <Results />
               </Suspense>
            )}
            {loadedComponent === 'Instructions' && (
               <Suspense>
                  <Instructions />
               </Suspense>
            )}
         </div>

         <div className='flex justify-center absolute bottom-7 left-[50%] translate-x-[-50%]'>
            <div className='flex gap-2'>
               <span onClick={() => handleClick('Instructions', 1)}>
                  {radioBtnOn === 1 ? (
                     <IoIosRadioButtonOn />
                  ) : (
                     <IoIosRadioButtonOff />
                  )}
               </span>
               <span onClick={() => handleClick('Questions', 2)}>
                  {radioBtnOn === 2 ? (
                     <IoIosRadioButtonOn />
                  ) : (
                     <IoIosRadioButtonOff />
                  )}
               </span>
               <span onClick={() => handleClick('Results', 3)}>
                  {radioBtnOn === 3 ? (
                     <IoIosRadioButtonOn />
                  ) : (
                     <IoIosRadioButtonOff />
                  )}
               </span>
            </div>
         </div>
      </div>
   );
};

export default Preview;
