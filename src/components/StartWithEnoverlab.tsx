"use client";

import React from "react";
import { motion } from "framer-motion"; // Importing framer motion components
import RightArrowCTAButton from "./RightArrowCTAButton";
import MaxWidth from "@/constant/MaxWidth";

export default function StartWithEnoverlab() {
  return (
    <section className="font-plus-jakarta-sans">
      <MaxWidth className="py-[100px]">
        <motion.div
          className="flex flex-col items-center justify-center gap-10 rounded-[30px] bg-primary-300 px-4 py-[60px] text-center text-white md:py-20 ipad:gap-12 ipad:py-[100px]"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1 className="w-full max-w-[783px] text-xl font-bold !leading-[150%] sm:text-2xl md:text-3xl ipad:text-4xl">
            Start Your Career Journey with Enoverlab and have a real world
            experience!
          </h1>

          <RightArrowCTAButton className="bg-white text-[#323232]">
            Get Started
          </RightArrowCTAButton>
        </motion.div>
      </MaxWidth>
    </section>
  );
}
