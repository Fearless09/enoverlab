"use client"

import { UseGlobalContext } from '@/app/provider'
import React, { useState } from 'react'
import FormCTAButton from './FormCTAButton'


const internshipArr: {
    internship: string,
    start: string,
    end: string
}[] = [
        {
            internship: "Internship P50",
            start: "March 15th",
            end: "June 15th"
        },
        {
            internship: "Internship D43",
            start: "March 30th",
            end: "July 11th"
        },
    ]

export default function Step2() {
    const { setSteps } = UseGlobalContext()
    const [internshipState, setInternshipState] = useState<{
        internship: string,
        start: string,
        end: string
    }>(internshipArr[0])

    return (
        <>
            <h1 className='text-[32px] font-medium text-primary-300'>
                Lorem ipsum dolor sit amet, adipiscing elit
            </h1>

            <form className='mt-[68px]'>
                <div className='grid grid-cols-2 gap-[26px]'>
                    {internshipArr?.map((item, index) => (
                        <InternshipCard
                            key={index}
                            item={item}
                            active={internshipState === item}
                            onclick={() => setInternshipState(item)}
                        />
                    ))}
                </div>

                <FormCTAButton
                    text='Continue'
                    style='mt-[59px]'
                    onclick={() => setSteps(3)}
                />
            </form>
        </>
    )
}






function InternshipCard({ active, onclick, item: {
    internship, start, end
} }: {
    item: {
        internship: string,
        start: string,
        end: string
    },
    active: boolean,
    onclick: () => void
}) {

    return (
        <button className={`h-[220px] rounded-[7px] border py-[47px] px-[19px] flex flex-col gap-[15px] relative ${active
            ? "border-primary-300 bg-primary-300 text-white"
            : "bg-white text-secondary border-[#727272]"
            }`}
            onClick={onclick}
            type='button'
        >
            <div className='w-[14px] h-[14px] absolute top-[12px] right-[19px] bg-white'></div>

            <h5 className='font-medium text-2xl'>{internship}</h5>
            <div className='flex items-center gap-1 text-base'>
                <span className='w-[43px] font-medium'>Start:</span>
                <span className='font-light'>{start}</span>
            </div>
            <div className='flex items-center gap-1 text-base'>
                <span className='w-[43px] font-medium'>End:</span>
                <span className='font-light'>{end}</span>
            </div>
        </button>
    )
}
