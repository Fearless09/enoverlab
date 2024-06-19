import React from 'react'

export default function RadioCheck({ name, label }: {
    name: string,
    label: string
}) {
    return (
        <div className='flex items-center gap-2 relative'>
            <input
                type="radio"
                name={name}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[13px] h-[13px] opacity-0 peer"
            />
            <div className='w-[13px] h-[13px] rounded-[2px] border border-secondary peer-checked:!border-primary-300 peer-checked:bg-primary-300 peer-checked:content-["*"] text-white'>
            </div>
            <span className='text-base font-medium text-secondary'>{label}</span>
        </div>
    )
}
