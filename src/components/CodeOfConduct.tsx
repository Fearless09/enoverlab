"use client";

import React, { ReactNode, useState, useEffect, useRef } from "react";
import RightArrowCTAButton from "./RightArrowCTAButton";
import { CommunicationSVG, CultureSVG, ReadinessSVG } from "@/constant/SVGs";
import { motion } from "framer-motion"; // Import Framer Motion
import CodeOfConductModal from "@/constant/codeOfConductModal"; // Importing the modal component

const codes: {
  svg: ReactNode;
  name: string;
  description: string;
}[] = [
  {
    svg: <CultureSVG />,
    name: "Culture",
    description: "Respect everyone's different backgrounds and experiences.",
  },
  {
    svg: <CommunicationSVG />,
    name: "Communication",
    description: "Take part in team meetings and listen to others' ideas.",
  },
  {
    svg: <ReadinessSVG />,
    name: "Readiness",
    description: "Be creative and resourceful in solving problems.",
  },
];

export default function CodeOfConduct() {
  const [isOpen, setIsOpen] = useState(false); // Modal state to control visibility

  const openModal = () => setIsOpen(true); // Function to open modal
  const closeModal = () => setIsOpen(false); // Function to close modal

  return (
    <section
      id="Our Code of Conduct"
      className="bg-primary-100 font-plus-jakarta-sans text-secondary"
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-x-5 gap-y-16 px-4 py-[71px] xl:flex-row xl:items-start">
        <div className="flex w-full max-w-[489px] flex-col gap-6 text-center sm:gap-[34px] xl:text-left">
          <h1 className="text-2xl font-semibold leading-relaxed text-primary-300 sm:text-[45px]">
            Our Code of Conduct
          </h1>
          <p className="text-base font-normal leading-[160%] sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Keeping the "Download Rules" button with arrow as it is */}
          <RightArrowCTAButton
            className="mx-auto border border-primary-300 bg-transparent text-primary-300 xl:mx-0"
            onClick={openModal} // Opens the modal on click
          >
            Download Rules
          </RightArrowCTAButton>
        </div>

        <div className="grid justify-around gap-8 sm:grid-cols-2 lg:justify-end 2xl:grid-cols-[repeat(2,360px)]">
          {codes?.map((item, index) => (
            <CodeCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Modal for full code of conduct */}
      <CodeOfConductModal open={isOpen} handleClose={closeModal} />
    </section>
  );
}

function CodeCard({
  item: { svg, name, description },
}: {
  item: {
    svg: ReactNode;
    name: string;
    description: string;
  };
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const ref = cardRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.5,
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
      className="flex max-h-[175px] w-full items-center justify-center rounded-[10px] border border-primary-200 bg-white p-[37px] xl:last:col-start-2"
      initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
      animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : -100 }} // Animate in from left
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-6">
        <div className="h-[30px] w-[30px]">{svg}</div>
        <div>
          <h4 className="text-lg font-medium sm:text-2xl">{name}</h4>
          <p className="mt-2.5 text-base font-normal leading-[160%]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
