'use client';

import React from 'react';
import { mainRoutes } from '@/constants/routeNames';
import { usePathname } from 'next/navigation';
import PopOver from './PopOver';

const Header = () => {
   const route = usePathname();
   // const segments = route.split('/');

   return (
      <>
         <div className='flex justify-between items-baseline mb-10'>
            <div className='text-6xl text-content2 font-black'>
               {mainRoutes.find(
                  (mainRoute) =>
                     route === mainRoute.route ||
                     route.startsWith(mainRoute.route)
               )?.name || null}
            </div>
            <div className='hidden md:block text-lg text-white font-bold '>24 Apr 2024</div>
            <div className='block md:hidden text-lg text-white font-bold '><PopOver/></div>
         </div>
      </>
   );
};

export default Header;
