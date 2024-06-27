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
            description: "Respect everyone's different backgrounds and experiences."
        },
        {
            svg: <CommunicationSVG />,
            name: "Communication",
            description: "Take part in team meetings and listen to others' ideas."
        },
        {
            svg: <ReadinessSVG />,
            name: "Readiness",
            description: "Be creative and resourceful in solving problems."
        },
    ]

export default function CodeOfConduct() {
    return (
        <div className='bg-primary-100 text-secondary font-plus-jakarta-sans'>
            <div className='container mx-auto px-4 sm:px-[70px] py-[71px] flex flex-col xl:flex-row items-center xl:items-start justify-between gap-y-16 gap-x-5'>
                <div className='flex flex-col gap-6 sm:gap-[34px] w-full max-w-[489px] text-center xl:text-left'>
                    <h1 className='text-primary-300 font-semibold text-2xl sm:text-[45px] leading-relaxed'>
                        Our Code of Conduct
                    </h1>
                    <p className='font-normal text-base sm:text-xl leading-[160%]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <RightArrowCTAButton
                        buttonStyles='bg-transparent border-primary-300 text-primary-300 mx-auto xl:mx-0'
                        text='Download Rules'
                        arrowColor='#0046FF'
                    />
                </div>

                <div className='grid sm:grid-cols-2 2xl:grid-cols-[repeat(2,360px)] justify-around lg:justify-end gap-8'>
                    {codes?.map((item, index) => (
                        <CodeCard
                            key={index}
                            item={item}
                        />
                    ))}
                </div>
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
        <div className='max-h-[175px] w-full flex items-center p-[37px] justify-center bg-white rounded-[10px] border border-primary-200 xl:last:col-start-2'>
            <div className='flex gap-6'>
                <div className='w-[30px] h-[30px]'>{svg}</div>
                <div>
                    <h4 className='font-medium text-lg sm:text-2xl'>
                        {name}
                    </h4>
                    <p className='text-base font-normal leading-[160%] mt-2.5'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}