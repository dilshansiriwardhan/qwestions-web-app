import Link from 'next/link';
import React from 'react';
import Layout from '@/components/layout';

const Create = () => {
   return (
      <>
         <Layout>
            <div className='grid grid-cols-4 gap-4 w-full h-[150vw] md:gap-2 md:h-auto md:ml-6 lg:ml-16 md:aspect-[3.5/2]'>
               <div className='bg-content3 rounded-3xl col-span-4 row-span-2 lg:rounded-3xl md:rounded-xl'></div>
               <div className='bg- rounded-3xl col-span-4 md:col-span-2 row-start-4 md:row-start-3 bg-gradient-to-r from-[#00FF87] from-20% to-[#4C8DF6]'>
                  <Link href={'/create-test/create/instructions'}>
                     <div className='w-full h-full lg:rounded-3xl md:rounded-xl'></div>
                  </Link>
               </div>
               <div className='bg-content3 rounded-3xl lg:rounded-3xl md:rounded-xl col-span-2 md:col-span-1'></div>
               <div className='bg-content3 rounded-3xl lg:rounded-3xl md:rounded-xl col-span-2 md:col-span-1'></div>
            </div>
         </Layout>
      </>
   );
};

export default Create;
