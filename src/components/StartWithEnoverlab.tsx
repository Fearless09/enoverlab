import React from 'react'
import RightArrowCTAButton from './RightArrowCTAButton'

export default function StartWithEnoverlab() {
    return (
        <div className='px-[70px] py-[107px] font-plus-jakarta-sans'>
            <div className='mx-auto w-full max-w-[1120px] h-[413px] rounded-[30px] bg-primary-300 text-white text-center flex flex-col gap-12 items-center justify-center'>
                <h1 className='font-bold text-4xl w-full max-w-[783px] leading-[140%]'>
                    Start Your Career Journey with Enoverlab and have a real world experience!
                </h1>

                <RightArrowCTAButton
                    buttonStyles='text-white bg-[#1E1E1E] border-[#1E1E1E]'
                    arrowColor='#ffffff'
                    text='Get Started'
                />
            </div>
        </div>
    )
}
