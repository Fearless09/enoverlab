<<<<<<< HEAD
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <div className="w-full py-16 px-4 md:px-6 lg:px-8 hidden sm:block">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mx-auto w-full max-w-[641px] text-center mb-16">
          <h1 className="text-2xl font-medium text-primary-300 sm:text-4xl">
            Our Alumni Speaks
          </h1>
          <p className="mt-4 text-base font-normal leading-[160%] text-secondary sm:text-lg">
            Discover the impact our program has had on past interns. Hear from
            our alumni about their experience and how this internship shaped
            their careers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-end mt-8">
          <button className="flex items-center text-[#666666] hover:text-[#0066FF] transition-colors duration-300">
            <span className="mr-2">See all</span>
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

const TestimonialCard = ({ testimonial }: { testimonial: { name: string; role: string } }) => {
  const cardRef = useRef<HTMLDivElement | null>(null); // Ref for the testimonial card
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if the animation has already occurred

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when 50% of the element is visible
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Mark that the card has animated
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
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
  }, [hasAnimated]); // Dependency on hasAnimated so it only sets the state once

  return (
    <motion.div
      ref={cardRef} // Attach the ref to the component
      className="relative group overflow-hidden rounded-2xl"
      initial={{ opacity: 0, x: -100 }} // Initially off-screen left with opacity 0
      animate={{
        opacity: hasAnimated ? 1 : 0, // Fade in only after animation
        x: hasAnimated ? 0 : -100, // Slide in from left only once
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="relative w-full h-[280px] lg:h-[350px]">
        <div className="absolute inset-0 bg-gray-200" />
        <Image
          src="/api/placeholder/400/320"
          alt={`${testimonial.name}'s testimonial`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority // Load this image sooner if needed (first item or critical)
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              aria-label="Watch video"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer"
            >
              <Play className="w-6 h-6 text-black" />
            </button>
          </div>
          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-semibold text-white mb-1">
              {testimonial.name}
            </h3>
            <p className="text-gray-300">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
=======
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer motion components

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
    <div
      id="Our Alumni Speaks"
      className="hidden w-full px-4 py-16 sm:block md:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto mb-16 w-full max-w-[641px] text-center">
          <h1 className="text-2xl font-medium text-primary-300 sm:text-4xl">
            Our Alumni Speaks
          </h1>
          <p className="mt-4 text-base font-normal leading-[160%] text-secondary sm:text-lg">
            Discover the impact our program has had on past interns. Hear from
            our alumni about their experience and how this internship shaped
            their careers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* See All Button */}
        <div className="mt-8 flex justify-end">
          <button className="flex items-center text-[#666666] transition-colors duration-300 hover:text-[#0066FF]">
            <span className="mr-2">See all</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: { name: string; role: string };
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null); // Ref for the testimonial card
  const [isInView, setIsInView] = useState(false); // State to track if the card is in view

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility to true if the element is in the viewport
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      },
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
  }, []);

  return (
    <motion.div
      ref={cardRef} // Attach the ref to the component
      className="group relative overflow-hidden rounded-2xl"
      initial={{ opacity: 0, x: -100 }} // Initially off-screen left with opacity 0
      animate={{
        opacity: isInView ? 1 : 0, // Fade in when in view
        x: isInView ? 0 : -100, // Slide in from left
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="relative h-[280px] w-full lg:h-[350px]">
        <div className="absolute inset-0 bg-gray-200" />
        <Image
          src="/api/placeholder/400/320"
          alt={`${testimonial.name}'s testimonial`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <Play className="h-6 w-6 text-black" />
            </button>
          </div>
          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="mb-1 text-xl font-semibold text-white">
              {testimonial.name}
            </h3>
            <p className="text-gray-300">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
>>>>>>> f10e9785126c6d4e8a0fcc86869eb6a85fe1e2c0
