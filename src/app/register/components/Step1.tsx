"use client"

import React from 'react'
import FormInputText from './FormInputText'
import { DropdownSVG } from '@/constant/SVGs'
import RadioCheck from './RadioCheck'
import FormCTAButton from './FormCTAButton'
import { UseGlobalContext } from '@/app/provider'

export default function Step1() {
    const { setSteps } = UseGlobalContext()

    return (
        <>
            <h1 className='text-primary-300 font-medium text-xl md:text-2xl'>
                Lorem ipsum dolor sit amet, adipiscing elit dolor sit amet.
            </h1>

            <form className='mt-[26px] text-secondary'>
                <FormInputText
                    name='full_name'
                    label='Full Name'
                    required={true}
                />

                <FormInputText
                    name='phone_number'
                    label='Phone Number'
                    type='tel'
                    containerStyle='mt-4'
                    required={true}
                />

                <FormInputText
                    name='email_address'
                    label='Email Address'
                    type='email'
                    containerStyle='mt-4'
                    required={true}
                />

                <FormInputText
                    name='class_name'
                    label='Class Name (E.g Cohort 35p)'
                    containerStyle='mt-4'
                    required={true}
                />

                <div className={`flex flex-col gap-2 mt-5`}>
                    <label
                        htmlFor={"internship_role"}
                        className='text-base font-medium'
                    >
                        Internship Role*
                    </label>
                    <div className='relative'>
                        <select
                            name="internship_role"
                            className='w-full text-base font-medium border border-secondary-100 h-[50px] px-[26px] text-secondary rounded-[7px]'
                        >
                            <option value="product manager">Product Manager</option>
                            <option value="product designer">Product Designer</option>
                            <option value="frontend developer">Frontend Developer</option>
                        </select>

                        <button
                            className='h-[45px] absolute top-1/2 -translate-y-1/2 right-[6px] bg-white z-10 pe-5'
                            type='button'
                        >
                            <DropdownSVG />
                        </button>
                    </div>
                </div>

                <FormInputText
                    name='your_experience'
                    label='Share with us  your  training experience'
                    containerStyle='mt-[30px]'
                />

                <div className={`flex flex-col gap-2.5 mt-[30px]`}>
                    <label
                        htmlFor={"availability"}
                        className='text-base font-medium leading-[140%]'
                    >
                        This internship is a eight(8) weeks internship, would you be available?*
                    </label>
                    <div className='flex items-center gap-6'>
                        <RadioCheck
                            name='availability'
                            label='Yes'
                        />
                        <RadioCheck
                            name='availability'
                            label='No'
                        />
                    </div>
                </div>

                {/* CTA Button Here */}
            </form>

            <FormCTAButton
                text='Next'
                style='mt-8'
                onclick={() => setSteps(2)}
            />
        </>
    )
}
