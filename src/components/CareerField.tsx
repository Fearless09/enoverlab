"use client"

import Image from 'next/image'
import React from 'react'
import RightArrowCTAButton from './RightArrowCTAButton'
import Link from 'next/link'


const careers: {
    name: string,
    description: string,
    img: string
}[] = [
        {
            name: "Product Designer",
            description: "Understanding what users need and want, signing wireframes for the product,  working with developers understand the design so they can build it correctly.",
            img: "/product_design.png"
        },
        {
            name: "Product Manager",
            description: "Working with different teams to make sure everyone is on the same page, ensuring the project stays on schedule and within budget.",
            img: "/product_manager.png"
        },
        {
            name: "Frontend Dev",
            description: "Works with designers and back-end developers to bring the product to life. Uses languages like HTML, CSS,React, JavaScript etc to build the product.",
            img: "/frontend_dev.png"
        },
    ]

export default function CareerField() {
    return (
        <div className='bg-primary-300 px-4 sm:px-[70px] py-[51px] font-plus-jakarta-sans'>
            <div className='w-full max-w-[640px] mx-auto text-center text-white'>
                <h1 className='font-medium text-2xl sm:text-4xl leading-relaxed'>
                    Our Career Fields
                </h1>

                <p className='text-base text-white/70 sm:text-lg font-normal leading-[160%] mt-3 sm:mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div className='container mx-auto mt-10 sm:mt-[61px] flex flex-wrap justify-around gap-y-12 gap-x-4'>
                {careers?.map((item, index) => (
                    <CareerCard
                        key={index}
                        img={item.img}
                        name={item.name}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}


function CareerCard({ img, name, description }: {
    img: string,
    name: string,
    description: string
}) {
    return (
        <div className='max- h-[520px] relative w-[402px] rounded-[15px] bg-white text-secondary py-[22px] px-4'>
            <Image
                src={img}
                width={370}
                height={196}
                alt=''
                objectFit='contain'
                className=''
            />

            <h1 className='mt-[34px] font-normal text-xl sm:text-[32px]'>
                {name}
            </h1>

            <p className='mt-[26px] font-light text-[15px] leading-[160%]'>
                {description}
            </p>

            <Link
                href={"/register"}
                target='_blank'
            >
                <RightArrowCTAButton
                    text='Apply Now'
                    buttonStyles='border-primary-300 bg-white text-primary-30`0 absolute left-4 bottom-10'
                    arrowColor='#0046FF'
                    onclick={() => { }}
                />
            </Link>
        </div>
    )
}
