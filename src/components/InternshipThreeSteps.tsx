import React from 'react'


const threeSteps: {
    step: string,
    heading: string,
    body: string,
    otherStyle: string
}[] = [
        {
            step: "Step 1",
            heading: "Onboarding & Learning",
            body: "Get acquainted with your project and understand your objectives.",
            otherStyle: "bg-primary-300 text-white"
        },
        {
            step: "Step 2",
            heading: "Practical Experience",
            body: "Apply your training to real-world projects.",
            otherStyle: "bg-primary-100 text-secondary"
        },
        {
            step: "Step 3",
            heading: "Reflect & Improve",
            body: "Summarize your experience, insights, and growth to boost your career prospects.",
            otherStyle: "bg-primary-100 text-secondary"
        },
    ]

export default function InternshipThreeSteps() {
    return (
        <div className='mt-[49px] px-[70px] py-12 font-plus-jakarta-sans'>
            <div className='max-w-[708px] w-full text-center mx-auto'>
                <h1 className='text-primary-300 text-4xl font-semibold'>
                    Your Internship Journey in Three Steps
                </h1>
                <p className='mt-4 text-xl text-secondary font-normal leading-[160%]'>
                    Kickstart your career with an internship that offers hands-on experience, and professional growth opportunities.
                </p>
            </div>

            <div className='mt-14 grid grid-cols-[repeat(3,402px)] justify-around gap-4'>
                {threeSteps?.map((item, index) => (
                    <InternshipStepsCard
                        key={index}
                        step={item.step}
                        otherStyle={item.otherStyle}
                        body={item.body}
                        heading={item.heading}
                    />
                ))}
            </div>
        </div>
    )
}


function InternshipStepsCard({ otherStyle, step, heading, body }: {
    otherStyle: string,
    step: string
    heading: string,
    body: string
}) {

    return (
        <div className={`h-[393px] rounded-[10px] px-[32px] py-[72px] ${otherStyle}`}>
            <h1 className='font-medium text-4xl'>{step}</h1>

            <p className='mt-10 text-xl leading-[160%]'>
                <span className='font-medium'>{heading}:</span>
                {" "}
                <span className='font-light'>{body}</span>
            </p>
        </div>
    )
}
