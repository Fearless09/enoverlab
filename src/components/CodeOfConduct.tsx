import React, { ReactNode } from 'react'
import RightArrowCTAButton from './RightArrowCTAButton'
import { CommunicationSVG, CultureSVG, ReadinessSVG } from '@/constant/SVGs'


const codes: {
    svg: ReactNode,
    name: string,
    description: string
}[] = [
        {
            svg: <CultureSVG />,
            name: "Culture",
            description: "Lorem ipsum dolor sit amet, eiusmod tempor."
        },
        {
            svg: <CommunicationSVG />,
            name: "Communication",
            description: "Lorem ipsum dolor sit amet, eiusmod tempor."
        },
        {
            svg: <ReadinessSVG />,
            name: "Readiness",
            description: "Lorem ipsum dolor sit amet, eiusmod tempor."
        },
    ]

export default function CodeOfConduct() {
    return (
        <div className='bg-primary-100 px-[70px] py-[71px] text-secondary font-plus-jakarta-sans flex justify-between gap-5'>
            <div className='flex flex-col gap-[34px] w-full max-w-[489px]'>
                <h1 className='text-primary-300 font-semibold text-[45px]'>
                    Our Code of Conduct
                </h1>
                <p className='font-normal text-xl leading-[160%]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <RightArrowCTAButton
                    buttonStyles='bg-transparent border-primary-300 text-primary-300'
                    text='Download Rules'
                    arrowColor='#0046FF'
                />
            </div>

            <div className='grid grid-cols-[repeat(2,359px)] justify-end gap-8'>
                {codes?.map((item, index) => (
                    <CodeCard
                        key={index}
                        item={item}
                    />
                ))}
            </div>
        </div>
    )
}



function CodeCard({ item: {
    svg, name, description
} }: {
    item: {
        svg: ReactNode,
        name: string,
        description: string
    }
}) {
    return (
        <div className='h-[175px] flex items-center p-[37px] justify-center bg-white rounded-[10px] border border-primary-200 last:col-start-2'>
            <div className='flex gap-6'>
                <div className='w-[30px] h-[30px]'>{svg}</div>
                <div>
                    <h4 className='font-medium text-2xl'>
                        {name}
                    </h4>
                    <p className='text-xl font-normal leading-[160%] mt-2.5'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}