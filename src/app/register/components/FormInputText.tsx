import React from 'react'

export default function FormInputText({ name, label, containerStyle, type, required }: {
    name: string,
    label: string,
    containerStyle?: string,
    type?: string,
    required?: boolean
}) {
    return (
        <div className={`flex flex-col gap-2 ${containerStyle}`}>
            <label
                htmlFor={name}
                className='text-base font-medium'
            >
                {label} {required && "*"}
            </label>
            <input
                type={type || "text"}
                className='w-full text-base font-medium border border-secondary-100 h-[50px] px-[26px] text-secondary placeholder:text-secondary-100 rounded-[7px]'
                // value={""}
                // onChange={() => { }}
                name={name}
                required={required || false}
            />
        </div>
    )
}
