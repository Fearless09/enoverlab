import React from 'react'


const purposes: {
    text: string,
    otherStyle: string
}[] = [
        {
            text: "Connect with professionals and open doors to opportunities and growth.",
            otherStyle: "bg-primary-300 text-white"
        },
        {
            text: "Build a portfolio, showcasing your achievements, and skills for future opportunities",
            otherStyle: "bg-primary-100 text-primary-300"
        },
        {
            text: "Apply theoretical knowledge and understand industry standards",
            otherStyle: "bg-primary-200 text-white"
        },
    ]

export default function PurposeOfInternship() {
    return (
        <div className='px-4 sm:px-[70px] py-12 text-center font-plus-jakarta-sans container mx-auto'>
            <h1 className='font-semibold text-primary-300 text-2xl sm:text-[40px]'>
                Purpose of the Internship
            </h1>

            <div className='mt-7 sm:mt-20 flex flex-wrap gap-y-5 gap-x-4 justify-around'>
                {purposes?.map((item, index) => (
                    <PurposeCard
                        key={index}
                        text={item.text}
                        otherStyle={item.otherStyle}
                    />
                ))}
            </div>
        </div>
    )
}


function PurposeCard({ text, otherStyle }: {
    text: string,
    otherStyle: string
}) {
    return (
        <div className={`rounded-[10px] sm:min-w-[401px] w-full sm:w-[calc(33.33%-32px)] h-[201px] px-8 flex justify-center items-center ${otherStyle}`}>
            <span className='w-full sm:max-w-[305px] text-base sm:text-xl'>
                {text}
            </span>
        </div>
    )
}
