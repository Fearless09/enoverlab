import React from "react";

const threeSteps: {
  step: string;
  heading: string;
  body: string;
  otherStyle: string;
}[] = [
  {
    step: "Step 1",
    heading: "Onboarding & Learning",
    body: "Get acquainted with your project and understand your objectives.",
    otherStyle: "bg-primary-100 text-secondary",
  },
  {
    step: "Step 2",
    heading: "Practical Experience",
    body: "Apply your training to real-world projects.",
    otherStyle: "bg-primary-300 text-white",
  },
  {
    step: "Step 3",
    heading: "Reflect & Improve",
    body: "Summarize your experience, insights, and growth to boost your career prospects.",
    otherStyle: "bg-primary-100 text-secondary",
  },
];

export default function InternshipThreeSteps() {
  return (
    <section className="sm:mt-[49px]">
      <div className="container mx-auto px-4 py-12 font-plus-jakarta-sans">
        <div className="mx-auto w-full max-w-[708px] text-center">
          <h1 className="text-2xl font-semibold leading-snug text-primary-300 sm:text-4xl">
            Your Internship Journey in Three Steps
          </h1>
          <p className="mt-4 text-base font-normal leading-[160%] text-secondary sm:text-xl">
            Kickstart your career with an internship that offers hands-on
            experience, and professional growth opportunities.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap justify-around gap-x-4 gap-y-8 sm:mt-14">
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
    </section>
  );
}

function InternshipStepsCard({
  otherStyle,
  step,
  heading,
  body,
}: {
  otherStyle: string;
  step: string;
  heading: string;
  body: string;
}) {
  return (
    <div
      className={`flex min-h-[300px] w-full items-center justify-center rounded-[10px] px-[32px] py-[72px] sm:min-h-[393px] sm:w-[calc(33.33%-32px)] sm:min-w-[401px] ${otherStyle}`}
    >
      <div className="-mt-14 w-full sm:w-[340px]">
        <h1 className="text-2xl font-medium sm:text-4xl">{step}</h1>

        <p className="mt-10 text-base leading-[160%] sm:text-base">
          <span className="font-medium">{heading}:</span>{" "}
          <span className="font-light xl:text-xl">{body}</span>
        </p>
      </div>
    </div>
  );
}
