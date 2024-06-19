import React from 'react'


const questions: string[] = [
    '1. What exactly is Product Management?',
    '2. Can I still take the training without any idea on tech or product management ?',
    '3. Is the training beginner friendly?',
    '4. Do I get a certificate at the end of the training?',
    '5. What are the benefits of becoming a Product Manager?'
]

export default function FAQ() {
    return (
        <div className='mt-[87px] px-[70px] py-[37px] font-plus-jakarta-sans text-secondary'>
            <h4 className='max-w-[641px] w-full leading-[160%] text-3xl font-semibold mx-auto text-center'>
                Get quick answers to questions asked by people like you
            </h4>

            <div className='mt-10 w-full max-w-[991px] mx-auto'>
                {questions?.map((item, index) => (
                    <Question
                        key={index}
                        item={item}
                    />
                ))}
            </div>
        </div>
    )
}



function Question({ item }: {
    item: string
}) {
    return (
        <div className='text-2xl py-4 font-semibold leading-[160%] border-b border-b-black'>
            <p className='w-full max-w-[763px]'>{item}</p>
        </div>
    )
}