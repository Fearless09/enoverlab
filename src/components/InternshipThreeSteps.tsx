"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import MaxWidth from "@/constant/MaxWidth";
import { cn } from "@/lib/utils";
import {
  CurvedArrowLeft,
  CurvedArrowRight,
  ForwardArrow,
} from "@/constant/SVGs";
import useAnimateObserver from "@/hooks/useAnimateObserver";

const threeSteps = [
  {
    heading: "Onboarding & Learning",
    subtext: "Get acquainted with your project and understand your objectives.",
  },
  {
    heading: "Practical Experience",
    subtext: "Apply your training to real-world projects.",
  },
  {
    heading: "Reflect & Improve",
    subtext:
      "Summarize your experience, insights, and growth to boost your career prospects.",
  },
];

export default function InternshipThreeSteps() {
  return (
    <section
      id="Your Internship Journey in Three Steps"
      className="font-plus-jakarta-sans sm:mt-[49px]"
    >
      <MaxWidth className="py-12">
        <div className="mx-auto w-full max-w-[708px] text-center">
          <h1 className="text-2xl font-semibold leading-snug text-[#000A23] md:text-4xl">
            Your Internship Journey in Three Steps...
          </h1>
          <p className="mt-5 text-base leading-[160%] text-secondary sm:text-xl">
            Kickstart your career with an internship that offers hands-on
            experience, and professional growth opportunities.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-x-4 gap-y-8 overflow-x-hidden sm:mt-14 md:grid md:grid-cols-[1fr,40px,1fr,40px,1fr] lg:grid-cols-[1fr,65px,1fr,65px,1fr]">
          {threeSteps?.map((item, index) => (
            <React.Fragment key={index}>
              <InternshipStepsCard
                item={item}
                index={index}
                className={index === 1 ? "ms-auto bg-[#0046FF] text-white" : ""}
              />
              {index < 2 && (
                <>
                  <div className="flex items-center justify-center max-md:hidden">
                    <ForwardArrow />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
}

const InternshipStepsCard = ({
  className,
  item: { subtext, heading },
  index,
}: {
  className: string;
  item: { subtext: string; heading: string };
  index: number;
}) => {
  const { ref, hasAnimated } = useAnimateObserver();

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        className={cn(
          "relative z-[2] flex h-full justify-center rounded-[10px] bg-[#DBF5FF] p-7 pt-[50px] text-[#323232] max-md:w-4/5",
          className,
        )}
        initial={{ opacity: 0, x: hasAnimated ? -100 : 100 }} // Start off-screen (left or right)
        animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : 100 }} // Animate to visible when in view
        transition={{ duration: 0.5 }}
      >
        <p className="w-full max-w-[250px]">
          {heading}: <span className="opacity-80">{subtext}</span>
        </p>
      </motion.div>

      {index === 0 && (
        <CurvedArrowRight className="absolute -bottom-8 left-[80%] z-[1] -translate-x-8 md:hidden" />
      )}
      {index === 1 && (
        <CurvedArrowLeft className="absolute -bottom-8 right-[80%] z-[1] translate-x-0.5 md:hidden" />
      )}
    </div>
  );
};
