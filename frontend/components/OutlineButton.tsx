import React from 'react';
import { Button } from '@nextui-org/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   name: string;
   active: boolean;
   size?:"md" | "sm" | "lg" | undefined;
   onclick?: () => void | any;
}

const OutlineButton = ({ name, active, onclick , size}: ButtonProps) => {
   return (
      <div>
         {/* <button className={`border-2 ${colorVarients[color]} rounded-lg px-3 py-2`} {...props}>{name}</button> */}
         <Button
            color='primary'
            variant={active ? 'solid' : 'flat'}
            onPress={onclick}
            className='text-foreground'
            size={size}
         >
            {name}
         </Button>
      </div>
   );
};

export default OutlineButton;
