"use client"

import React from 'react'

export default function FormCTAButton({ text, onclick, style }: {
    text: string,
    style?: string,
    onclick?: (e?: any) => void,
}) {
    return (
        <button
            className={`w-full bg-primary-300 h-12 rounded-[7px] text-center text-white font-plus-jakarta-sans text-base font-normal hover:opacity-[0.98] active:scale-[0.98] ${style}`}
            onClick={onclick}
        >
            {text}
        </button>
    )
}
