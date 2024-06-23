import { PlayIconSVG } from '@/constant/SVGs'
import React from 'react'


const testimonials: {
    name: string,
    role: string,
    videoSrc: string
}[] = [
        {
            name: "Happiness Adaobi",
            role: "Product Designer",
            videoSrc: ""
        },
        {
            name: "Tochi Elebebe",
            role: "Lead Product Manager",
            videoSrc: ""
        },
        {
            name: "Adeolowo Samuel",
            role: "Frontend Developer",
            videoSrc: ""
        },
    ]

export default function AluminiTestimonial() {
    return (
        <div className='bg-primary-100 px-4 sm:px-[70px] py-[52px] mt-5 sm:mt-[47px] font-plus-jakarta-sans'>
            <div className='text-center w-full max-w-[641px] mx-auto'>
                <h1 className='text-primary-300 font-medium text-2xl sm:text-4xl'>
                    Alumini Testmonials
                </h1>

                <p className='text-secondary text-base sm:text-xl font-normal leading-[160%] mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div className='mt-10 sm:mt-[54px] flex flex-wrap gap-x-5 gap-y-16 justify-around'>
                {testimonials?.map((item, index) => (
                    <TestimonialCard
                        key={index}
                        item={item}
                    />
                ))}
            </div>
        </div>
    )
}



function TestimonialCard({ item: {
    name, role, videoSrc
} }: {
    item: {
        name: string,
        role: string,
        videoSrc: string
    }
}) {
    return (
        <div className='max-h-[467px] w-[413px] bg-primary-300 text-white py-9 px-7'>
            <div className='relative bg-white h-[213px]'>
                <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:opacity-[0.95] active:scale-[0.95]'>
                    <PlayIconSVG color='#C5C5C5' />
                </button>
            </div>

            <h1 className='mt-8 sm:mt-[71px] font-medium text-xl sm:text-4xl'>{name}</h1>
            <p className='mt-2 text-base sm:text-xl font-normal leading-[160%]'>{role}</p>
        </div>
    )
}