"use client"

import React from 'react'
import Step1 from './components/Step1'
import Steps from './components/Steps'
import { UseGlobalContext } from '../provider'
import Step2 from './components/Step2'
import Step3 from './components/Step3'


export default function Pgae() {
    const { steps } = UseGlobalContext()

    return (
        <div className='max-w-[440px] w-full mx-auto'>
            <Steps />

            <div className='mt-10'>
                {Number(steps) === 1 && <Step1 />}
                {Number(steps) === 2 && <Step2 />}
                {Number(steps) === 3 && <Step3 />}
            </div>
        </div>
    )
}
