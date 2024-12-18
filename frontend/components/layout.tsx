import React, { ReactNode } from 'react';
import Header from '@/components/header';

interface HeaderProps{
   children: ReactNode,
   moreWidth?:string;

}

const Layout = ({ children , moreWidth }:HeaderProps) => {

   return (
      <>
         <div className={`${moreWidth ? moreWidth : 'md:mr-6 lg:mr-28'}`}>
            <Header />
            {children}
         </div>
      </>
   );
};

export default Layout;