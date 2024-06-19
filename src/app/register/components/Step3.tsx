import React, { useState } from 'react'
import FormInputText from './FormInputText'
import FormCTAButton from './FormCTAButton'
import { useRouter } from 'next/navigation'


const timeArray: string[] = ["7:00PM", "4:00PM", "6:00PM", "7:30PM", "9:00PM", "10:00PM"]

export default function Step3() {
    const [timeState, setTimeState] = useState<string>(timeArray[0])
    const router = useRouter()

    return (
        <>
            <h1 className='font-medium text-[32px] text-primary-300'>
                Lorem ipsum dolor sit amet, adipiscing elit
            </h1>

            <form
                className='mt-10'
            >
                <FormInputText
                    name='date'
                    label='Select a date'
                    containerStyle=''
                    type='date'
                />

                <div className='mt-4'>
                    <p className='text-secondary text-base font-medium'>Choose a time</p>
                    <div className='mt-4 grid grid-cols-3 gap-2.5'>
                        {timeArray?.map((item, index) => (
                            <TimeButton
                                key={index}
                                item={item}
                                onclick={() => setTimeState(item)}
                                active={item === timeState}
                            />
                        ))}
                    </div>
                </div>

                <div className='mt-[34px] flex gap-[7px] relative'>
                    <input
                        type="checkbox"
                        name="tnc"
                        className='w-6 h-6 cursor-pointer rounded-[2px]'
                    />
                    {/* <div className='w-6 h-6 border border-primary-300 rounded-[2px]'></div> */}
                    <div>
                        <p className='font-medium text-base text-secondary'>
                            I agree with the terms and conditions
                        </p>
                        <p className='mt-1 text-primary-300 font-medium text-xs'>
                            User Agreement and Privacy Policy
                        </p>
                    </div>
                </div>

                <FormCTAButton
                    text='Submit'
                    style='mt-2.5'
                    onclick={(e) => {
                        e.preventDefault()
                        router.replace("/welcome")
                    }}
                />
            </form>
        </>
    )
}




function TimeButton({ item, active, onclick }: {
    item: string,
    active: boolean,
    onclick: () => void
}) {

    return (
        <button
            className={`h-[51px] rounded-[7px] border ${active
                ? "bg-primary-300 text-white border-primary-300"
                : "border-secondary-100 bg-white text-secondary"
                }`
            }
            onClick={onclick}
            type='button'
        >
            {item}
        </button>
    )
}
