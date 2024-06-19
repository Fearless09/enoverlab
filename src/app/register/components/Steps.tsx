"use client"

import { UseGlobalContext } from '@/app/provider'
import React from 'react'

const n: number = 1
export default function Steps() {
    const { steps } = UseGlobalContext()

    return (
        <div className='flex items-center w-[326px] justify-between relative'>
            {Array(3).fill("1").map((item, index) => (
                <button
                    className={`w-[50px] h-[50px] rounded-full border text-xl font-medium font-plus-jakarta-sans z-[3] cursor-default ${Number(steps) >= (index + 1)
                        ? "bg-primary-300 border-primary-300 text-white"
                        : "border-[#c5c5c5] bg-white text-[#c5c5c5]"
                        }`}
                    key={index}
                >
                    {index + 1}
                </button>
            ))}

            <hr className='w-full absolute top-1/2 -translate-y-1/2 left-0 border-[#c5c5c5]' />
            <hr className={`absolute top-1/2 -translate-y-1/2 left-0 border-primary-300 ${Number(steps) === 3
                ? "w-full"
                : "w-1/2"
                }`}
            />
        </div>
    )
}
