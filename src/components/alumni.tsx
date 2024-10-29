"use client";

import React, { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import MaxWidth from "@/constant/MaxWidth";
import useCloseDialog from "@/hooks/useCloseDialog";
import RightArrowCTAButton from "./RightArrowCTAButton";

const testimonials = [
  {
    name: "Happiness Adaobi",
    role: "Product Designer",
  },
  {
    name: "Tochi Elebebe",
    role: "Lead Product Manager",
  },
  {
    name: "Adeolowo Samuel",
    role: "Frontend Developer",
  },
];

export default function AlumniTestimonials() {
  return (
    <MaxWidth id="Our Alumni Speaks" className="py-16 font-plus-jakarta-sans">
      <h1 className="text-center text-[clamp(1.5rem,_0.3776rem+3.2653vw,_2.5rem)] font-medium text-primary-300">
        Our Alumni Speaks
      </h1>
      <p className="mx-auto mt-4 w-full max-w-[750px] text-center text-[clamp(1rem,_0.4388rem+1.6327vw,_1.5rem)] font-light !leading-[160%] text-secondary">
        Discover the impact our program has had , we thrive for excellence and
        that is exactly what we provide.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>

      <RightArrowCTAButton className="ms-auto mt-8 !h-auto !w-auto rounded-full border border-[#7097FF] px-5 py-2.5">
        See all
      </RightArrowCTAButton>
    </MaxWidth>
  );
}

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: { name: string; role: string };
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [playing, setPlaying] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref } = useCloseDialog(() => setPlaying(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    const haywhy = cardRef.current;

    return () => {
      if (haywhy) {
        observer.unobserve(haywhy);
      }
    };
  }, [hasAnimated]);

  return (
    <div ref={ref}>
      <motion.div
        ref={cardRef}
        className="relative aspect-[390/500] max-h-[420px] w-full overflow-hidden rounded-[20px] bg-[#D9D9D9] sm:max-h-[500px]"
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: hasAnimated ? 1 : 0,
          x: hasAnimated ? 0 : -100,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-x-0 bottom-12 flex h-10 items-center justify-between pe-7 ps-5">
          <div className="text-black">
            <h4 className="text-[clamp(1.125rem,_0.7041rem+1.2245vw,_1.5rem)] font-medium">
              {testimonial.name}
            </h4>
            <p className="mt-2.5 text-[clamp(0.875rem,_0.5944rem+0.8163vw,_1.125rem)] font-light">
              {testimonial.role}
            </p>
          </div>

          <button
            className="flex size-[50px] shrink-0 items-center justify-center rounded-full border-[3px] border-white text-white hover:opacity-95 active:scale-98 md:size-[60px] md:border-4 [&&>svg]:size-8"
            onClick={() => setPlaying(!playing)}
          >
            {playing ? <Pause /> : <Play />}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
