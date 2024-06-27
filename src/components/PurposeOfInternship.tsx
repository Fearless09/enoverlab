import React from "react";

const purposes: {
    text: string;
    otherStyle: string;
}[] = [
        {
            text: "Connect with professionals and open doors to opportunities and growth.",
            otherStyle: "bg-primary-300 text-white",
        },
        {
            text: "Build a portfolio, showcasing your achievements, and skills for future opportunities",
            otherStyle: "bg-primary-100 text-primary-300",
        },
        {
            text: "Apply theoretical knowledge and understand industry standards",
            otherStyle: "bg-primary-200 text-white",
        },
    ];

export default function PurposeOfInternship() {
    return (
        <div className="container mx-auto px-4 py-12 text-center font-plus-jakarta-sans">
            <h1 className="text-2xl font-semibold text-primary-300 sm:text-[40px]">
                Purpose of the Internship
            </h1>

            <div className="mt-7 flex flex-wrap justify-around gap-x-4 gap-y-5 sm:mt-20">
                {purposes?.map((item, index) => (
                    <PurposeCard
                        key={index}
                        text={item.text}
                        otherStyle={item.otherStyle}
                    />
                ))}
            </div>
        </div>
    );
}

function PurposeCard({
    text,
    otherStyle,
}: {
    text: string;
    otherStyle: string;
}) {
    return (
        <div
            className={`flex h-[201px] w-full items-center justify-center rounded-[10px] px-8 sm:w-[calc(33.33%-32px)] sm:min-w-[401px] ${otherStyle}`}
        >
            <span className="w-full text-base sm:max-w-[305px] sm:text-xl">
                {text}
            </span>
        </div>
    );
}
