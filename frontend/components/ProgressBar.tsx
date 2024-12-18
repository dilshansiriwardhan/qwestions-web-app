'use client';

import { steps } from '@/constants/routeNames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {Progress} from "@nextui-org/react";


const ProgressBar = () => {
   const currentStep = usePathname();

   const currentIndex = steps.findIndex((step) => step.route === currentStep);
   const nextStep = steps[currentIndex + 1];
   const prevStep = steps[currentIndex - 1];

   const stepObj = steps.find((s) => s.route === currentStep) || {
      name: 'Instruction Page',
      route: '/create-test/create/instructions',
      progress:5
   };

   return (
      <>
         <div className='hidden w-full md:flex justify-center items-center my-10 lg:text-base md:text-sm'>
            {steps.map((step, index) => (
               <div key={index} className='flex items-center text-center'>
                  <Link href={step.route}>
                     <div
                        className={`cursor-pointer lg:px-2 md:px-0 py-2 font-bold ${
                           currentStep === step.route
                              ? 'text-green-500'
                              : 'text-gray-500'
                        }`}
                     >
                        {step.name}
                     </div>
                  </Link>
                  {index < steps.length - 1 && (
                     <div className='mx-2 text-gray-500 font-black'>&gt;</div>
                  )}
               </div>
            ))}
         </div>

         <div>
            <div className='w-full flex flex-col md:hidden justify-center items-center my-10 lg:text-base md:text-sm'>
               <div className='w-full'>
                  <Progress
                     aria-label='Downloading...'
                     size='md'
                     value={stepObj.progress}
                     color='success'
                     showValueLabel={true}
                     className='w-full'
                  />
               </div>
               <div
                  key={currentIndex}
                  className='flex items-center text-center'
               >
                  {currentIndex > 0 && (
                     <Link href={prevStep.route}>
                        <div className='mx-2 text-gray-500 font-black'>
                           &lt;
                        </div>
                     </Link>
                  )}
                  <Link href={stepObj.route}>
                     <div
                        className={`cursor-pointer lg:px-2 md:px-0 py-2 font-bold ${
                           currentStep === stepObj.route
                              ? 'text-green-500'
                              : 'text-gray-500'
                        }`}
                     >
                        {stepObj.name}
                     </div>
                  </Link>
                  {currentIndex < steps.length - 1 && (
                     <Link href={nextStep.route}>
                        <div className='mx-2 text-gray-500 font-black'>
                           &gt;
                        </div>
                     </Link>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};

export default ProgressBar;
