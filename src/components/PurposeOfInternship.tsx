"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const purposes = [
  {
    text: "Connect with professionals and open doors to opportunities and growth.",
    otherStyle: "bg-primary-300 text-white",
  },
  {
    text: "Build a portfolio, showcasing your achievements, and skills for future opportunities",
    otherStyle: "bg-primary-100 text-primary-300",
  },
  {
    text: "Apply theoretical knowledge and understand industry standards",
    otherStyle: "bg-primary-200 text-white",
  },
];

export default function PurposeOfInternship() {
  return (
    <section
      id="Purpose of the Internship"
      className="overflow-x-hidden font-plus-jakarta-sans"
    >
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold text-primary-300 sm:text-[40px]">
          Purpose of the Internship
        </h1>

        <div className="mt-7 flex flex-wrap justify-around gap-x-4 gap-y-5 sm:mt-20">
          {purposes?.map((item, index) => (
            <PurposeCard
              key={index}
              text={item.text}
              otherStyle={item.otherStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PurposeCard({
  text,
  otherStyle,
}: {
  text: string;
  otherStyle: string;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const ref = cardRef.current; //name it ref 

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the card is visible
      }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [hasAnimated]);

  return (
    <motion.div
      ref={cardRef}
      className={`flex h-[201px] w-full items-center justify-center rounded-[10px] px-8 sm:w-[calc(33.33%-32px)] sm:min-w-[401px] ${otherStyle}`}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : -100 }}
      transition={{ duration: 0.5 }}
    >
      <span className="w-full text-base sm:max-w-[305px] sm:text-xl">
        {text}
      </span>
    </motion.div>
  );
}
