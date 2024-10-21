"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import MaxWidth from "@/constant/MaxWidth";
import { cn } from "@/lib/utils";
import useAnimateObserver from "@/hooks/useAnimateObserver";

const purposes = [
  "Connect with professionals and open doors to opportunities and growth.",
  "Build a portfolio, showcasing your achievements, and skills for future opportunities",
  "Apply theoretical knowledge and understand industry standards",
];

export default function PurposeOfInternship() {
  return (
    <section
      id="Purpose of the Internship"
      className="mt-10 overflow-x-hidden font-plus-jakarta-sans md:mt-20"
    >
      <MaxWidth className="pb-12 text-center">
        <h1 className="text-2xl font-semibold text-primary-300 underline underline-offset-[10px] sm:text-3xl ipad:text-[40px]">
          Purpose of the Internship
        </h1>

        <div className="mt-7 grid grid-cols-1 gap-x-4 gap-y-5 sm:mt-10 sm:grid-cols-3">
          {purposes?.map((item, index) => (
            <PurposeCard
              key={index}
              purpose={item}
              className={index === 1 ? "bg-[#DBF5FF] text-[#0046FF]" : ""}
            />
          ))}
        </div>
      </MaxWidth>
    </section>
  );
}

function PurposeCard({
  purpose,
  className,
}: {
  purpose: string;
  className?: string;
}) {
  const { ref, hasAnimated } = useAnimateObserver();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "flex items-center justify-center rounded-[10px] bg-[#0046FF] px-8 py-10 text-[#DBF5FF]",
        className,
      )}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : -100 }}
      transition={{ duration: 0.5 }}
    >
      <p className="w-full text-base sm:max-w-[305px] md:text-xl">{purpose}</p>
    </motion.div>
  );
}
