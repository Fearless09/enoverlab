import { DropdownSVG } from '@/constant/SVGs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RightArrowCTAButton from './RightArrowCTAButton'

const navLinks: {
    name: string,
    href: string,
    dropdown?: boolean
}[] = [
        {
            name: "Programs",
            href: "/",
        },
        {
            name: "Internship",
            href: "/",
            dropdown: true
        },
        {
            name: "Blog",
            href: "/",
        },
        {
            name: "Free Resources",
            href: "/",
        },
    ]

export default function Navbar() {
    return (
        <nav className='px-[70px] mt-[34px] w-full flex items-center justify-between'>
            <Image
                src={"/enoverlab_logo.png"}
                width={225}
                height={0}
                alt='Enoverlab Logo'
                objectFit='contain'
                className=''
            />

            <span className='flex items-center gap-6'>
                {navLinks?.map((item, index) => (
                    <Link
                        className='text-xl font-normal flex items-center gap-1.5 text-secondary font-plus-jakarta-sans'
                        href={item.href}
                        key={index}
                    >
                        <span>{item.name}</span>
                        {item.dropdown && <DropdownSVG />}
                    </Link>
                ))}
            </span>

            <RightArrowCTAButton
                text='Contact Us'
                buttonStyles='border-primary-300 text-primary-300'
                arrowColor='#0046FF'
            />
        </nav>
    )
}
