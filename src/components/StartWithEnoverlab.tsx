<<<<<<< HEAD
"use client";

import React from "react";
import { motion } from "framer-motion"; // Importing framer motion components
import RightArrowCTAButton from "./RightArrowCTAButton";

export default function StartWithEnoverlab() {
    return (
        <section className="font-plus-jakarta-sans">
            <div className="container mx-auto px-4 py-[107px]">
                <motion.div
                    className="mx-auto flex h-[413px] w-full max-w-[1120px] flex-col items-center justify-center gap-12 rounded-[30px] bg-primary-300 px-4 text-center text-white"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <h1 className="w-full max-w-[783px] text-xl font-bold leading-[140%] sm:text-4xl">
                        Start Your Career Journey with Enoverlab and have a real world
                        experience!
                    </h1>

                    <RightArrowCTAButton
                        buttonStyles="text-white bg-[#1E1E1E] border-[#1E1E1E]"
                        arrowColor="#ffffff"
                        text="Get Started"
                    />
                </motion.div>
            </div>
        </section>
    );
}
=======
"use client";

import React from "react";
import { motion } from "framer-motion"; // Importing framer motion components
import RightArrowCTAButton from "./RightArrowCTAButton";
import MaxWidth from "@/constant/MaxWidth";

export default function StartWithEnoverlab() {
  return (
    <section className="font-plus-jakarta-sans">
      <MaxWidth className="py-[107px]">
        <motion.div
          className="mx-auto flex h-[413px] w-full max-w-[1120px] flex-col items-center justify-center gap-12 rounded-[30px] bg-primary-300 px-4 text-center text-white"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1 className="w-full max-w-[783px] text-xl font-bold leading-[140%] sm:text-4xl">
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
>>>>>>> f10e9785126c6d4e8a0fcc86869eb6a85fe1e2c0
