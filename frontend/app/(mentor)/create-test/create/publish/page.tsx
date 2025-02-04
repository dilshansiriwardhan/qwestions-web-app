'use client'
import React, { useState } from 'react'
import OutlineButton from '@/components/OutlineButton'

const AccessSetting = () => {
  const [isActive , setIsActive] = useState<number>(0);

  const handleClick = (index:number) => {
      setIsActive(index);
  }

  return (
    <div className='text-white'>
        <div>
          <h1 >Access Type</h1>
          <div className='flex flex-row gap-2 ml-6 mt-3'>
              <OutlineButton name='Public Key' onclick={() => handleClick(1)} active={isActive == 1}  />
              <OutlineButton name='Private Access Code' onclick={() => handleClick(2)} active={isActive == 2}   />
          </div>
        </div>

    </div>
  )
}

export default AccessSetting