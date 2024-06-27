import React from "react";
import RightArrowCTAButton from "./RightArrowCTAButton";

export default function StartWithEnoverlab() {
    return (
        <div className="container mx-auto px-4 py-[107px] font-plus-jakarta-sans sm:px-[70px]">
            <div className="mx-auto flex h-[413px] w-full max-w-[1120px] flex-col items-center justify-center gap-12 rounded-[30px] bg-primary-300 px-4 text-center text-white">
                <h1 className="w-full max-w-[783px] text-xl font-bold leading-[140%] sm:text-4xl">
                    Start Your Career Journey with Enoverlab and have a real world
                    experience!
                </h1>

                <RightArrowCTAButton
                    buttonStyles="text-white bg-[#1E1E1E] border-[#1E1E1E]"
                    arrowColor="#ffffff"
                    text="Get Started"
                />
            </div>
        </div>
    );
}
