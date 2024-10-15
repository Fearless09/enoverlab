'use client';

import React, { useEffect, useState } from "react";
import RightArrowCTAButton from "./RightArrowCTAButton";
import Link from "next/link";

// i totally removed the animation from this part 

// Helper function to animate numbers
const useAnimatedNumber = (endValue: number, duration: number): number => {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    let startTime: number;
    const updateNumber = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const newValue = Math.min(
        Math.floor((progress / duration) * endValue),
        endValue
      );
      setNumber(newValue);
      if (progress < duration) {
        requestAnimationFrame(updateNumber);
      }
    };
    requestAnimationFrame(updateNumber);
  }, [endValue, duration]);

  return number;
};

const Header: React.FC = () => {
  // Define animated numbers
  const studentsMentored = useAnimatedNumber(1500, 3000);
  const internshipCohort = useAnimatedNumber(110, 3000);
  const yearsOfService = useAnimatedNumber(3, 3000);
  const hiringRate = useAnimatedNumber(50, 3000);

  return (
    <div className="font-plus-jakarta-sans">
      {/* Header Section */}
      <header className={`mt-16 sm:mt-[50px]`}>
        <div className="container mx-auto flex h-full w-full items-center justify-center px-4 text-center">
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
                text="Apply Now"
                buttonStyles="border-[#C5C5C5] text-white bg-primary-300"
                arrowColor="#fff"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Statistics Box Section */}
      <div className="bg-[#DDE9FF] font-plus-jakarta-sans py-12 px-6 sm:px-12 rounded-lg mt-12 max-w-[1200px] mx-auto">
        <div className="flex flex-wrap items-center justify-center text-center gap-8 sm:gap-12">
          {/* Individual Statistics Box */}
          <div className="flex flex-col items-center border-r-2 border-black pr-8">
            <h3 className="text-[#0046FF] text-2xl sm:text-4xl italic font-bold">
              {studentsMentored}+
            </h3>
            <p className="text-[#0046FF] text-sm sm:text-lg">
              Students Mentored
            </p>
          </div>

          <div className="flex flex-col items-center border-r-2 border-black pr-8">
            <h3 className="text-[#0046FF] text-2xl sm:text-4xl italic font-bold">
              {internshipCohort}+
            </h3>
            <p className="text-[#0046FF] text-sm sm:text-lg">
              Internship Cohort
            </p>
          </div>

          <div className="flex flex-col items-center border-r-2 border-black pr-8">
            <h3 className="text-[#0046FF] text-2xl sm:text-4xl italic font-bold">
              {yearsOfService}+
            </h3>
            <p className="text-[#0046FF] text-sm sm:text-lg">
              Years of Service
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[#0046FF] text-2xl sm:text-4xl italic font-bold">
              {hiringRate}%
            </h3>
            <p className="text-[#0046FF] text-sm sm:text-lg">
              Hiring Rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
