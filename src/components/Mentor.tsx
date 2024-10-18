<<<<<<< HEAD
"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer motion components

const mentors = [
  {
    name: 'Sarah Ibeji',
    role: 'Product Partnership Manager',
    subRole: 'Lead Internship Mentor',
    imageUrl: '/Sarah.png',
  },
  {
    name: 'Imelda Onyebueke',
    role: 'Internship Product Manager',
    imageUrl: '/Imelda.png',
  },
];

export default function MentorsSection() {
  return (
    <div className="w-full py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Your Mentors</h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))}
        </div>
      </div>
    </div>
  );
}

const MentorCard = ({ mentor }: { mentor: { name: string; role: string; subRole?: string; imageUrl: string } }) => {
  const cardRef = useRef<HTMLDivElement | null>(null); // Ref for each mentor card
  const [isInView, setIsInView] = useState(false); // State to track if the card is in view

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Set visibility to true if the card is in view
      },
      {
        threshold: 0.5, // Trigger when 50% of the card is visible
      }
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
      ref={cardRef} // Attach the ref to the component
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }} // Initial state: off-screen with opacity 0
      animate={{
        opacity: isInView ? 1 : 0, // Fade in when in view
        y: isInView ? 0 : 50, // Slide up into view when in view
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="relative w-64 h-64 mb-4">
        <Image
          src={mentor.imageUrl}
          alt={mentor.name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 256px"
        />
      </div>

      {/* Mentor Info */}
      <h3 className="text-xl font-semibold mb-2">{mentor.name}</h3>
      <p className="text-center text-[#666666] mb-1">{mentor.role}</p>
      {mentor.subRole && (
        <p className="text-center text-[#666666] mb-2">{mentor.subRole}</p>
      )}

      {/* LinkedIn Icon */}
      <a href="#" className="mt-2">
        <FaLinkedin className="w-8 h-8 text-[#0077B5] hover:text-[#00669C] transition-colors duration-300" />
      </a>
    </motion.div>
  );
};
=======
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer motion components
import MaxWidth from "@/constant/MaxWidth";

const mentors = [
  {
    name: "Sarah Ibeji",
    role: "Product Partnership Manager",
    subRole: "Lead Internship Mentor",
    imageUrl: "/Sarah.png",
  },
  {
    name: "Imelda Onyebueke",
    role: "Internship Product Manager",
    imageUrl: "/Imelda.png",
  },
];

export default function MentorsSection() {
  return (
    <MaxWidth className="py-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-[40px] font-bold">Meet Your Mentors</h2>
        <p className="mx-auto mt-8 max-w-3xl text-lg text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Mentors Grid */}
      <div className="mx-auto mt-[100px] grid max-w-3xl grid-cols-1 gap-16 md:grid-cols-2">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>
    </MaxWidth>
  );
}

const MentorCard = ({
  mentor,
}: {
  mentor: { name: string; role: string; subRole?: string; imageUrl: string };
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null); // Ref for each mentor card
  const [isInView, setIsInView] = useState(false); // State to track if the card is in view

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Set visibility to true if the card is in view
      },
      {
        threshold: 0.5, // Trigger when 50% of the card is visible
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
      ref={cardRef} // Attach the ref to the component
      className="text-center"
      initial={{ opacity: 0, y: 50 }} // Initial state: off-screen with opacity 0
      animate={{
        opacity: isInView ? 1 : 0, // Fade in when in view
        y: isInView ? 0 : 50, // Slide up into view when in view
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="relative mb-4 aspect-[547/623] w-full max-w-[547px]">
        <Image
          src={mentor.imageUrl}
          alt={mentor.name}
          width={547}
          height={623}
          className="object-cover object-center"
        />
      </div>

      {/* Mentor Info */}
      <h3 className="mb-2 text-xl font-semibold">{mentor.name}</h3>
      <p className="mb-1 text-center text-[#666666]">{mentor.role}</p>
      {mentor.subRole && (
        <p className="mb-2 text-center text-[#666666]">{mentor.subRole}</p>
      )}

      {/* LinkedIn Icon */}
      <a href="#" className="mx-auto mt-3 flex w-fit">
        <FaLinkedin className="size-10 text-[#0077B5] transition-colors duration-300 hover:text-[#00669C]" />
      </a>
    </motion.div>
  );
};
>>>>>>> f10e9785126c6d4e8a0fcc86869eb6a85fe1e2c0
