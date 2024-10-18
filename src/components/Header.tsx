"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import RightArrowCTAButton from "./RightArrowCTAButton";
import Link from "next/link";

const useAnimatedNumber = (endValue: number, duration: number): number => {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    let startTime: number;
    const updateNumber = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const newValue = Math.min(
        Math.floor((progress / duration) * endValue),
        endValue,
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
  const studentsMentored = useAnimatedNumber(1500, 3000);
  const internshipCohort = useAnimatedNumber(110, 3000);
  const yearsOfService = useAnimatedNumber(3, 3000);
  const hiringRate = useAnimatedNumber(50, 3000);

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    controls.start({ opacity: 1, y: 0 });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div id="Give Yourself an Unbeatable Advantage" className="font-plus-jakarta-sans">
      <header className={`mt-16 sm:mt-[50px]`}>
        <div className="container mx-auto flex h-full w-full items-center justify-center px-4 text-center">
          <div className="flex flex-col items-center gap-y-6">
            <h1 className="w-full max-w-[813px] text-2xl font-medium !leading-snug text-primary-300 sm:text-3xl md:text-[60px]">
              Give Yourself an Unbeatable Advantage
            </h1>
            <p className="w-full max-w-[542px] text-base font-normal leading-[160%] text-secondary sm:text-xl">
              Take a next step that guarantees you real-world work experience in your chosen career.
            </p>
            <Link href={"/register"} target="_blank">
              <RightArrowCTAButton className="broder border-[#C5C5C5] bg-primary-300 text-white">
                Apply Now
              </RightArrowCTAButton>
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto mt-12 max-w-[860px] rounded-lg bg-[#DDE9FF] px-6 py-12 font-plus-jakarta-sans sm:px-12">
        <div className="flex flex-wrap items-center justify-center gap-8 text-center sm:gap-12">
          <motion.div
            className="flex flex-col items-center border-r-2 border-black pr-3"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold italic text-[#0046FF] sm:text-4xl">
              {studentsMentored}+
            </h3>
            <p className="text-sm text-[#0046FF] sm:text-lg">
              Students Mentored
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center border-r-2 border-black pr-3"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold italic text-[#0046FF] sm:text-4xl">
              {internshipCohort}+
            </h3>
            <p className="text-sm text-[#0046FF] sm:text-lg">
              Internship Cohort
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center border-r-2 border-black pr-3"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold italic text-[#0046FF] sm:text-4xl">
              {yearsOfService}+
            </h3>
            <p className="text-sm text-[#0046FF] sm:text-lg">
              Years of Service
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold italic text-[#0046FF] sm:text-4xl">
              {hiringRate}%
            </h3>
            <p className="text-sm text-[#0046FF] sm:text-lg">Hiring Rate</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
