import React from 'react';
import Layout from '@/components/layout';
import ProgressBar from '@/components/ProgressBar';

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
   return (
      <>
         {/* <div className='mr-28'>
            <div className='flex justify-between items-baseline mb-10'>
               <div className='text-6xl text-content2 font-black'>
                  Create Test
               </div>
               <div className='text-lg text-white font-bold '>24 Apr 2024</div>
            </div>
         </div> */}

         <Layout moreWidth='mr-2'>
            <ProgressBar />
            <div className='w-full px-8'>{children}</div>
         </Layout>
      </>
   );
};

export default layout;
