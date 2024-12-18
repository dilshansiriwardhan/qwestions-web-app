import React from 'react'
import { Input } from '@nextui-org/input';


const TimeInput = () => {
  return (
    <div>
        {/* <input type="text" className='input input-bordered w-[12rem]' {...props} placeholder='hh:'/> */}
        <Input
                  key={'outside'}
                  type='email'
                  labelPlacement={'outside'}
                  placeholder=''
                  className='max-w-[9rem] '
        />
    </div>
  )
}

export default TimeInput