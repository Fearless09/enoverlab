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
        <div className='px-[70px] py-12 text-center font-plus-jakarta-sans'>
            <h1 className='font-semibold text-primary-300 text-[40px]'>
                Purpose of the Internship
            </h1>

            <div className='mt-20 grid grid-cols-[repeat(3,402px)] gap-4 justify-around'>
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
        <div className={`rounded-[10px] h-[201px] flex justify-center items-center ${otherStyle}`}>
            <span className='w-full max-w-[305px] text-xl'>
                {text}
            </span>
        </div>
    )
}
