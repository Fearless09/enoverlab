<<<<<<< HEAD
'use client';
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Step data
const threeSteps = [
  {
    step: "Step 1",
    heading: "Onboarding & Learning",
    body: "Get acquainted with your project and understand your objectives.",
    otherStyle: "bg-primary-100 text-secondary",
  },
  {
    step: "Step 2",
    heading: "Practical Experience",
    body: "Apply your training to real-world projects.",
    otherStyle: "bg-primary-300 text-white",
  },
  {
    step: "Step 3",
    heading: "Reflect & Improve",
    body: "Summarize your experience, insights, and growth to boost your career prospects.",
    otherStyle: "bg-primary-100 text-secondary",
  },
];

export default function InternshipThreeSteps() {
  return (
    <section className="sm:mt-[49px]">
      <div className="container mx-auto px-4 py-12 font-plus-jakarta-sans">
        {/* Header Section */}
        <div className="mx-auto w-full max-w-[708px] text-center">
          <h1 className="text-2xl font-semibold leading-snug text-primary-300 sm:text-4xl">
            Your Internship Journey in Three Steps
          </h1>
          <p className="mt-4 text-base font-normal leading-[160%] text-secondary sm:text-xl">
            Kickstart your career with an internship that offers hands-on experience and professional growth opportunities.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-7 flex flex-wrap justify-around gap-x-4 gap-y-8 sm:mt-14 overflow-x-hidden">
          {threeSteps?.map((item, index) => (
            <InternshipStepsCard
              key={index}
              step={item.step}
              otherStyle={item.otherStyle}
              body={item.body}
              heading={item.heading}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function InternshipStepsCard({
  otherStyle,
  step,
  heading,
  body,
}: {
  otherStyle: string;
  step: string;
  heading: string;
  body: string;
}) {
  const cardRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Use Intersection Observer to trigger animation when element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true); // Trigger animation only once when the element is in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is in view
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isInView]); // Ensure that the effect depends on isInView

  return (
    <motion.div
      ref={cardRef}
      className={`flex min-h-[300px] w-full items-center justify-center rounded-[10px] px-[32px] py-[72px] sm:min-h-[393px] sm:w-[calc(33.33%-32px)] sm:min-w-[401px] ${otherStyle}`}
      initial={{
        opacity: 0,
        x: 100, // Initial position off-screen (to the right)
      }}
      animate={{
        opacity: isInView ? 1 : 0, // Fade in when in view
        x: isInView ? 0 : 100, // Slide from right when in view
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="-mt-14 w-full sm:w-[340px]">
        <h1 className="text-2xl font-medium sm:text-4xl">{step}</h1>
        <p className="mt-10 text-base leading-[160%] sm:text-base">
          <span className="font-medium">{heading}:</span>{" "}
          <span className="font-light xl:text-xl">{body}</span>
        </p>
      </div>
    </motion.div>
  );
}
=======
"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const threeSteps = [
  {
    step: "Step 1",
    heading: "Onboarding & Learning",
    body: "Get acquainted with your project and understand your objectives.",
    otherStyle: "bg-primary-100 text-secondary",
  },
  {
    step: "Step 2",
    heading: "Practical Experience",
    body: "Apply your training to real-world projects.",
    otherStyle: "bg-primary-300 text-white",
  },
  {
    step: "Step 3",
    heading: "Reflect & Improve",
    body: "Summarize your experience, insights, and growth to boost your career prospects.",
    otherStyle: "bg-primary-100 text-secondary",
  },
];

export default function InternshipThreeSteps() {
  return (
    <section
      id="Your Internship Journey in Three Steps"
      className="sm:mt-[49px]"
    >
      <div className="container mx-auto px-4 py-12 font-plus-jakarta-sans">
        <div className="mx-auto w-full max-w-[708px] text-center">
          <h1 className="text-2xl font-semibold leading-snug text-primary-300 sm:text-4xl">
            Your Internship Journey in Three Steps
          </h1>
          <p className="mt-4 text-base font-normal leading-[160%] text-secondary sm:text-xl">
            Kickstart your career with an internship that offers hands-on
            experience and professional growth opportunities.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap justify-around gap-x-4 gap-y-8 overflow-x-hidden sm:mt-14">
          {threeSteps?.map((item, index) => (
            <InternshipStepsCard
              key={index}
              step={item.step}
              otherStyle={item.otherStyle}
              body={item.body}
              heading={item.heading}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function InternshipStepsCard({
  otherStyle,
  step,
  heading,
  body,
}: {
  otherStyle: string;
  step: string;
  heading: string;
  body: string;
}) {
  const cardRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is in view
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`flex min-h-[300px] w-full items-center justify-center rounded-[10px] px-[32px] py-[72px] sm:min-h-[393px] sm:w-[calc(33.33%-32px)] sm:min-w-[401px] ${otherStyle}`}
      initial={{ opacity: 0, x: isInView ? -100 : 100 }} // Start off-screen (left or right)
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }} // Animate to visible when in view
      transition={{ duration: 0.5 }}
    >
      <div className="-mt-14 w-full sm:w-[340px]">
        <h1 className="text-2xl font-medium sm:text-4xl">{step}</h1>
        <p className="mt-10 text-base leading-[160%] sm:text-base">
          <span className="font-medium">{heading}:</span>{" "}
          <span className="font-light xl:text-xl">{body}</span>
        </p>
      </div>
    </motion.div>
  );
}
>>>>>>> f10e9785126c6d4e8a0fcc86869eb6a85fe1e2c0
