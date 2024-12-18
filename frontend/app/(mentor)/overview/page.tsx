import React from 'react';
import Layout from '@/components/layout';

const Overview = () => {
   return (
      <>
         <Layout>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 w-full h-[120vw] md:gap-2 md:h-auto md:ml-6 lg:ml-16 md:aspect-[3.5/2] '>
               <div className='bg-primary rounded-2xl  lg:rounded-3xl md:rounded-xl'></div>
               <div className='bg-content3 rounded-2xl  lg:rounded-3xl md:rounded-xl'></div>
               <div className='bg-content3 rounded-2xl  lg:rounded-3xl md:rounded-xl'></div>
               <div className='bg-content3 rounded-2xl  lg:rounded-3xl row-start-3 md:row-start-auto col-span-2 md:rounded-xl'></div>
               <div className='bg-white rounded-2xl  lg:rounded-3xl md:rounded-xl '></div>
            </div>
         </Layout>
      </>
   );
};

export default Overview;
