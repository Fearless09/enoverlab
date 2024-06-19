import { PlayIconSVG } from '@/constant/SVGs'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <div className='px-10 py-7 relative'>
            <figure>
                <Image
                    src={"/hero.png"}
                    width={985}
                    height={542}
                    alt='Hero'
                    objectFit='contain'
                    className='max-w-[985px] w-full max-h-[542px] mx-auto h-full rounded-[15px]'
                />
            </figure>

            <button className='w-[84px] h-[84px] rounded-full bg-[#F6F6F6] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 active:scale-[0.98] hover:opacity-[0.98] flex items-center justify-center'>
                <PlayIconSVG style='ms-1.5' />
            </button>
        </div>
    )
}
