"use client";

import { UseGlobalContext } from "@/app/provider";
import React from "react";

const n: number = 1;
export default function Steps() {
  const { steps } = UseGlobalContext();

  return (
    <div className="relative flex w-full max-w-[326px] items-center justify-between">
      {Array(3)
        .fill("1")
        .map((item, index) => (
          <button
            className={`z-[3] h-10 w-10 cursor-default rounded-full border font-plus-jakarta-sans text-xl font-medium sm:h-[50px] sm:w-[50px] ${
              Number(steps) >= index + 1
                ? "border-primary-300 bg-primary-300 text-white"
                : "border-[#c5c5c5] bg-white text-[#c5c5c5]"
            }`}
            key={index}
          >
            {index + 1}
          </button>
        ))}

      <hr className="absolute left-0 top-1/2 w-full -translate-y-1/2 border-[#c5c5c5]" />
      <hr
        className={`absolute left-0 top-1/2 -translate-y-1/2 border-primary-300 ${
          Number(steps) === 3 ? "w-full" : "w-1/2"
        }`}
      />
    </div>
  );
}
