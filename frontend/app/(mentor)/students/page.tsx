import React from 'react';
import Layout from '@/components/layout';

const Students = () => {
   return (
      <>
         <Layout>
            <div className='grid grid-cols-4 gap-4 w-full h-[150vw] md:gap-2 md:h-auto md:ml-6 lg:ml-16 md:aspect-[3.5/2]'>
               <div className='bg-content3 rounded-3xl col-span-4 row-span-2'></div>
               <div className='bg-content3 rounded-3xl md:col-span-2 row-start-4 md:row-start-auto col-span-4'></div>
               <div className='bg-[#00FF87] rounded-3xl col-span-2 md:col-span-1'></div>
               <div className='bg-content3 rounded-3xl col-span-2 md:col-span-1'></div>
            </div>
         </Layout>
      </>
   );
};

export default Students;
