import React from "react";

const questions: string[] = [
    "1. What exactly is Product Management?",
    "2. Can I still take the training without any idea on tech or product management ?",
    "3. Is the training beginner friendly?",
    "4. Do I get a certificate at the end of the training?",
    "5. What are the benefits of becoming a Product Manager?",
];

export default function FAQ() {
    return (
        <div className="mt-5 font-plus-jakarta-sans text-secondary sm:mt-[87px]">
            <div className="container mx-auto px-4 py-[37px]">
                <h4 className="mx-auto w-full max-w-[641px] text-center text-2xl font-semibold !leading-[160%] sm:text-3xl">
                    Get quick answers to questions asked by people like you
                </h4>

                <div className="mx-auto mt-5 w-full max-w-[991px] sm:mt-10">
                    {questions?.map((item, index) => (
                        <Question key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Question({ item }: { item: string }) {
    return (
        <div className="border-b border-b-black py-4 text-base font-normal leading-[160%] sm:text-2xl sm:font-semibold">
            <p className="w-full max-w-[763px]">{item}</p>
        </div>
    );
}
