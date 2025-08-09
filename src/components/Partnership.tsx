"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import MaxWidth from "@/constant/MaxWidth";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import {
//   CurvedArrowLeft,
//   CurvedArrowRight,
//   ForwardArrow,
// } from "@/constant/SVGs";
import useAnimateObserver from "@/hooks/useAnimateObserver";

// const threeSteps = [
//   {
//     heading: "Onboarding & Learning",
//     subtext: "Get acquainted with your project and understand your objectives.",
//   },
//   {
//     heading: "Practical Experience",
//     subtext: "Leverage the skills and knowledge to tackle real-world projects",
//   },
//   {
//     heading: "Reflect & Improve",
//     subtext:
//       "Summarize your experience, insights, and growth to enhance your career",
//   },
// ];

export default function Partnership() {
  return (
    <>
      <h1 className="text-center font-Poppins text-[#222222] text-[40px]"> Types of Partnership </h1>
        <div className="flex justify-end  bg-[#DAEDFF] items-center px-6 py-2 gap-3 rounded-[30px]">
          <div className="flex flex-col justify-evenly py-2 gap-3 rounded-[30px]">
            <div>
            <h3 className="font-Poppins align-top text-left font-bold text-[24px] text-[#222222]
              ">
                Partnership for training <br>government workers</br>
              </h3>
              <h3 className="font-Poppins align-top text-left font-semibold text-[20px] text-[#404040]">
                BENEFITS
              </h3>
              <div className="flex flex-row gap-3">
                <Image src="/vector (6).png" alt="Hero image" width={10.25} height={3.25} />
                <p className="font-Poppins align-top text-left font-medium text-[20px] text-[#404040]">
                  Enhance public service delivery
                </p>
              </div>
              <div className="flex flex-row">
                <Image src="/vector (6).png" alt="Hero image" width={2.25} height={2.25} />
                <p className="font-Poppins align-top text-left font-medium text-[20px] text-[#404040]">
                 Cost efficiency and process optimization
                </p>
              </div>
              <div className="flex flex-row">
                <Image src="/vector (6).png" alt="Hero image" width={2.25} height={2.25} />
                <p className="font-Poppins align-top text-left font-medium text-[20px] text-[#404040]">
                  Data driven decision making 
                </p>
              </div>
              <div className="flex flex-row">
                <Image src="/vector (6).png" alt="Hero image" width={2.25} height={2.25} />
                <p className="font-Poppins align-top text-left font-medium text-[20px] text-[#404040]">
                  Innovation and leadership development
                </p>
              </div>
            </div>
          </div>   
        </div>
    </>
  )
}
