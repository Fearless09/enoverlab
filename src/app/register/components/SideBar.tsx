"use client"

import { UseGlobalContext } from '@/app/provider'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const sideBarImage: {
    src: string,
    styles: string
}[] = [
        {
            src: "/step_1.png",
            styles: ""
        },
        {
            src: "/step_2.png",
            styles: ""
        },
        {
            src: "/step_3.png",
            styles: ""
        },
    ]

export default function SideBar() {
    const { steps } = UseGlobalContext()

    return (
        <div className='max-w-[350px] lg:max-w-[619px] w-full bg-primary-300 pt-11 px-10 lg:px-[72px] hidden md:flex flex-col relative'>
            <Link
                href={'#'}
            >
                <Image
                    src={'/enoverlab_logo_white.png'}
                    width={225}
                    height={0}
                    alt='Enoverlab'
                    className=''
                />
            </Link>

            <div className='flex-1 flex items-center'>
                <Image
                    src={sideBarImage[steps - 1].src}
                    width={390}
                    height={0}
                    alt='Trainees'
                    className={`${sideBarImage[steps - 1].styles} z-[1] mx-auto`}
                />
            </div>

            <Image
                src={"/side_t_line.png"}
                width={424}
                height={0}
                alt=''
                className='absolute left-0 -top-5 z-0'
            />
            <Image
                src={"/side_b_line.png"}
                width={1335}
                height={0}
                alt=''
                className='absolute -right-24 bottom-0 z-0'
            />
        </div>
    )
}
