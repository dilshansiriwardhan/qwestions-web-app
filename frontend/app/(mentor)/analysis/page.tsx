import React from 'react';
import Layout from '@/components/layout';

const Analysis = () => {
   return (
      <>
         <Layout>
            <div className='grid grid-cols-2 gap-4 w-full h-[150vw] md:gap-2 md:h-auto md:ml-6 lg:ml-16 md:aspect-[3.5/2]'>
               <div className='bg-content3 col-span-2 md:col-span-1 rounded-3xl lg:rounded-3xl md:rounded-xl'></div>
               <div className='rounded-3xl col-span-2 row-start-1 md:col-span-1 md:row-start-auto lg:rounded-3xl md:rounded-xl'></div>
               <div className='bg-content3 rounded-3xl col-span-2 md:col-span-1 row-span-2 lg:rounded-3xl md:rounded-xl'></div>
               <div className='bg-content3 rounded-3xl col-span-2 md:col-span-1 row-span-2 lg:rounded-3xl md:rounded-xl'></div>
            </div>
         </Layout>
      </>
   );
};

export default Analysis;
