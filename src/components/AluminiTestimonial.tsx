"use client";

import { PlayIconSVG } from "@/constant/SVGs";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const testimonials: {
  name: string;
  role: string;
  videoSrc: string;
}[] = [
  {
    name: "Happiness Adaobi",
    role: "Product Designer",
    videoSrc: "",
  },
  {
    name: "Tochi Elebebe",
    role: "Lead Product Manager",
    videoSrc: "",
  },
  {
    name: "Adeolowo Samuel",
    role: "Frontend Developer",
    videoSrc: "",
  },
];

export default function AluminiTestimonial() {
  return (
    <section className="mt-5 bg-primary-100 px-4 py-[52px] font-plus-jakarta-sans sm:mt-[47px] sm:hidden sm:px-[70px]">
      <div className="container mx-auto">
        <div className="mx-auto w-full max-w-[641px] text-center">
          <h1 className="text-2xl font-medium text-primary-300 sm:text-4xl">
            Our Alumni Speaks
          </h1>

          <p className="mt-4 text-base font-normal leading-[160%] text-secondary sm:text-lg">
            Discover the impact our program has had on past interns. Hear from
            our alumni about their experience and how this internship shaped
            their careers.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-around gap-x-5 gap-y-16 sm:mt-[54px]">
          {testimonials?.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  item: { name, role, videoSrc },
}: {
  item: {
    name: string;
    role: string;
    videoSrc: string;
  };
}) {
  const cardRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const haywhy = cardRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    if (haywhy) {
      observer.observe(haywhy);
    }

    return () => {
      if (haywhy) {
        observer.unobserve(haywhy);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="max-h-[467px] w-[413px] rounded-[15px] bg-primary-300 px-7 py-9 text-white"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-[213px] rounded-[15px] bg-white">
        <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:opacity-[0.95] active:scale-[0.95]">
          <PlayIconSVG color="#C5C5C5" />
        </button>
      </div>

      <h1 className="mt-8 text-xl font-medium sm:mt-[71px] sm:text-4xl">
        {name}
      </h1>
      <p className="mt-2 text-base font-normal leading-[160%] sm:text-xl">
        {role}
      </p>
    </motion.div>
  );
}
