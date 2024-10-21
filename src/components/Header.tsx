"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import RightArrowCTAButton from "./RightArrowCTAButton";
import Link from "next/link";
import MaxWidth from "@/constant/MaxWidth";
import useAnimatedNumber from "@/hooks/useAnimatedNumber";

const Header: React.FC = () => {
  const studentsMentored = useAnimatedNumber(1500, 3000);
  const internshipCohort = useAnimatedNumber(110, 3000);
  const yearsOfService = useAnimatedNumber(3, 3000);
  const hiringRate = useAnimatedNumber(50, 3000);

  return (
    <MaxWidth className="font-plus-jakarta-sans">
      <header
        id="Give Yourself an Unbeatable Advantage"
        className="mt-16 flex flex-col items-center gap-y-6 text-center sm:mt-[50px]"
      >
        <h1 className="text-2xl font-medium !leading-snug text-primary-300 md:text-3xl ipad:text-[60px]">
          Give Yourself an Unbeatable <br /> Advantage...
        </h1>
        <p className="w-full max-w-[500px] text-base font-normal leading-[160%] text-secondary md:text-xl">
          Take a next step that guarantees you real-world{" "}
          <br className="max-sm:hidden" /> work experience in your chosen
          career.
        </p>
        <Link href={"/register"} target="_blank">
          <RightArrowCTAButton
            arrow={false}
            className="broder border-[#C5C5C5] bg-primary-300 text-white"
          >
            Apply Now
          </RightArrowCTAButton>
        </Link>
      </header>

      <div className="mx-auto mt-12 flex max-w-[1140px] flex-wrap items-center justify-center gap-x-5 gap-y-8 rounded-lg bg-[#DDE9FF] px-3 py-5 text-center font-plus-jakarta-sans sm:gap-x-8 md:px-6 ipad:gap-x-12">
        <MotionDiv
          value={studentsMentored}
          suffix="+"
          text="Students Mentored"
        />
        <Divider />
        <MotionDiv
          value={internshipCohort}
          suffix="+"
          text="Internship Cohort"
        />
        <Divider />
        <MotionDiv value={yearsOfService} suffix="+" text="Years of Service" />
        <Divider />
        <MotionDiv value={hiringRate} suffix="%" text="Hiring Rate" />
      </div>
    </MaxWidth>
  );
};

export default Header;

function MotionDiv({
  value,
  suffix,
  text,
}: {
  value: number;
  suffix: string;
  text: string;
}) {
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
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold italic text-[#0046FF] md:text-4xl">
        {value}
        {suffix}
      </h3>
      <p className="mt-2.5 text-xs font-light text-[#0046FF] md:text-sm">
        {text}
      </p>
    </motion.div>
  );
}

function Divider() {
  return (
    <span
      id="divider"
      className="h-[70px] w-0.5 rounded-full bg-[#000E32] max-sm:hidden"
    />
  );
}
