"use client";

import React from "react";
import RightArrowCTAButton from "./RightArrowCTAButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
    const router = useRouter();

    return (
        <header className="mt-16 flex w-full items-center justify-center px-4 text-center font-plus-jakarta-sans sm:mt-[34px] sm:h-[577px] sm:px-[70px]">
            <div className="flex flex-col items-center gap-y-6">
                <h1 className="w-full max-w-[813px] text-2xl font-medium !leading-snug text-primary-300 sm:text-3xl md:text-[60px]">
                    Give Yourself an Unbeatable Advantage
                </h1>

                <p className="w-full max-w-[542px] text-base font-normal leading-[160%] text-secondary sm:text-xl">
                    Take a next step that guarantees you real-world work experience in
                    your chosen career.
                </p>

                <Link href={"/register"} target="_blank">
                    <RightArrowCTAButton
                        text="Apply Here"
                        buttonStyles="border-[#C5C5C5] text-white bg-primary-300"
                        arrowColor="#fff"
                    />
                </Link>
            </div>
        </header>
    );
}
