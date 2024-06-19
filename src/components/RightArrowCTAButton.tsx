import { RightArrowSVG } from '@/constant/SVGs'
import React from 'react'

export default function RightArrowCTAButton({ buttonStyles, arrowColor, text, onclick }: {
    buttonStyles: string,
    arrowColor?: string,
    text: string,
    onclick?: () => void
}) {
    return (
        <button
            className={`w-[208px] h-[51px] border rounded-[7px] flex items-center justify-center gap-4 active:scale-[0.98] hover:opacity-[0.95] ${buttonStyles}`}
            onClick={onclick}
        >
            <span>{text}</span>
            <RightArrowSVG color={arrowColor} />
        </button>
    )
}
