"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FormCTAButton from '../register/components/FormCTAButton'

export default function page() {
    return (
        <div className='w-full h-screen bg-white overflow-hidden px-5 pt-[87px] flex justify-center items-center flex-col font-plus-jakarta-sans'>
            <Link
                href={"/"}
            >
                <Image
                    src={"/enoverlab_logo.png"}
                    width={225}
                    height={0}
                    alt=''
                />
            </Link>

            <div className='flex-1 flex items-center justify-center'>
                <div className='w-[660px] h-[411px] rounded-[12px] border border-primary-300 bg-primary-100 flex flex-col items-center justify-center'>
                    <h1 className='font-semibold text-[32px] text-primary-300'>
                        Welcome
                    </h1>
                    <h3 className='mt-2 text-primary-300 font-semibold text-2xl'>
                        To the Opensource Internship
                    </h3>
                    <FormCTAButton
                        text='Join Internship Team 70'
                        style='max-w-[440px] mt-4'
                        onclick={() => { }}
                    />
                </div>
            </div>
        </div>
    )
}
