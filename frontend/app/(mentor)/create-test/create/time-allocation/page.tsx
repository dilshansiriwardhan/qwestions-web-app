'use client'
import React, { useState } from 'react'
import DateInput from '@/components/input-components/DateInput'
import TimeInput from '@/components/input-components/TimeInput'
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";

const TimeAllocation = () => {
    const [durationMethod, setDurationMethod] = useState<'test' | 'question'>('test');

    // State for selecting test activation option
    const [activationOption, setActivationOption] = useState<'manual' | 'period'>('manual');

    return (
        <div>
            {/* <DateInput classNames='text-foreground w-50'/><TimeInput/> */}
            <div >
                <h1>Select test duration measuring method</h1>
                <div className='ml-[6rem] mt-[1rem] flex flex-col gap-3'>
                    <div onClick={() => { setDurationMethod('test') }} className='flex flex-row items-center gap-4 w-[30rem]'>
                        {durationMethod === 'test' ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
                        <h3>Time to complete the test</h3>
                        <TimeInput />
                    </div>

                    <div onClick={() => { setDurationMethod('question') }} className='flex flex-row items-center gap-4 w-[30rem]'>
                        {durationMethod === 'question' ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
                        <h3>Time to complete the test</h3>
                        <TimeInput />
                    </div>
                </div>
            </div>

            <div className='mt-[2rem]'>
                <h1>Test activation options</h1>
                <div className='ml-[6rem] mt-[1rem] flex flex-col gap-3'>
                    <div onClick={() => { setActivationOption('manual') }} className='flex flex-row items-center gap-4 w-[30rem]'>
                        {activationOption === 'manual' ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
                        <h3>Manual test activation</h3>
                        <TimeInput />
                    </div>

                    <div onClick={() => { setActivationOption('period') }} className='flex flex-row items-center gap-3 w-[30rem]'>
                        {activationOption === 'period' ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
                        <h3>Activation in a set time period</h3>
                        <DateInput label='Start Date'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TimeAllocation