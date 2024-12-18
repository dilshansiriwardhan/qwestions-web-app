import React, { useState } from 'react';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa6';

interface Toggle {
   isOn: boolean;
   classNames?:string;
}

const ToggleButton = ({ isOn , classNames}: Toggle) => {
   const [on, setOn] = useState(isOn);
   const handleClick = () => {
      setOn(!on);
   };
   
   return (
      <>
         <div className={`${classNames}`}>
            {on ? (
               <FaToggleOn onClick={handleClick} className='text-green-500' />
            ) : (
               <FaToggleOff onClick={handleClick} />
            )}
         </div>
      </>
   );
};

export default ToggleButton;
