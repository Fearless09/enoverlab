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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            img: "/product_design.png"
        },
        {
            name: "Product Manager",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            img: "/product_manager.png"
        },
        {
            name: "Frontend Dev",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            img: "/frontend_dev.png"
        },
    ]

export default function CareerField() {
    return (
        <div className='bg-primary-300 px-[70px] py-[51px] font-plus-jakarta-sans'>
            <div className='w-full max-w-[640px] mx-auto text-center text-white'>
                <h1 className='font-medium text-4xl'>
                    Our Career Fields
                </h1>

                <p className='text-xl font-normal leading-[160%] mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div className='mt-[61px] grid grid-cols-[repeat(3,402px)] justify-around gap-4'>
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
        <div className='h-[557px] rounded-[15px] bg-white text-secondary py-[22px] px-4'>
            <Image
                src={img}
                width={370}
                height={196}
                alt=''
                objectFit='contain'
                className=''
            />

            <h1 className='mt-[34px] font-medium text-[32px]'>
                {name}
            </h1>

            <p className='mt-[26px] font-normal text-xl leading-[160%]'>
                {description}
            </p>

            <Link
                href={"/register"}
                target='_blank'
            >
                <RightArrowCTAButton
                    text='Apply Here'
                    buttonStyles='border-primary-300 bg-white text-primary-300 mt-8'
                    arrowColor='#0046FF'
                    onclick={() => { }}
                />
            </Link>
        </div>
    )
}
