"use client"

import React from 'react'
import RightArrowCTAButton from './RightArrowCTAButton'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
    const router = useRouter()

    return (
        <header className='mt-[34px] w-full h-[577px] px-[70px] text-center flex justify-center items-center font-plus-jakarta-sans'>
            <div className='flex flex-col gap-y-6 items-center'>
                <h1 className='text-primary-300 font-medium text-[60px] max-w-[813px] w-full'>
                    Give Yourself an Unbeatable Advantage
                </h1>

                <p className='max-w-[542px] w-full text-secondary font-normal text-xl leading-[160%]'>
                    Take a  next step that guarantees you real-world work experience in your chosen career.
                </p>

                <Link
                    href={"/register"}
                    target='_blank'
                >
                    <RightArrowCTAButton
                        text='Apply Here'
                        buttonStyles='border-[#C5C5C5] text-white bg-primary-300'
                        arrowColor='#fff'
                    />
                </Link>
            </div>
        </header>
    )
}
