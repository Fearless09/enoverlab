"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AboutInternship: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Animation variants
  const boxVariants = {
    initial: { opacity: 0, scale: 0.5 }, // Start state for the box
    animate: { opacity: 1, scale: 1 }, // End state for the box
  };

  const textVariants = {
    initial: { opacity: 0, x: -100 }, // Start state for the text
    animate: { opacity: 1, x: 0 }, // End state for the text
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when the component is visible
          observer.disconnect(); // Stop observing once visible
        } else {
          setIsVisible(false); // Set to false when the component is not visible
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // After the box is visible, show the text
      const timer = setTimeout(() => setTextVisible(true), 300); // Delay for text animation
      return () => clearTimeout(timer);
    } else {
      setTextVisible(false); // Reset text visibility when not visible
    }
  }, [isVisible]);

  return (
    <motion.div
      id="About Internship"
      ref={ref} // Attach the ref to the main container
      className="mt-12 flex h-[700px] items-center justify-center bg-blue-100 sm:h-[500px]"
      initial="initial"
      animate={isVisible ? "animate" : "initial"} // Animate box visibility
      exit="initial" // No exit animation for the box
      variants={boxVariants}
      transition={{ duration: 0.5 }} // Animation duration for the box
    >
      <div className="w-[95%] max-w-3xl rounded-lg bg-white p-8 shadow-md sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <motion.h2
          className="mb-4 text-center text-2xl font-bold text-blue-600"
          initial="initial"
          animate={textVisible ? "animate" : "initial"} // Animate text visibility
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.3 }} // Delay text animation
        >
          About Internship
        </motion.h2>
        <motion.p
          className="text-center leading-relaxed text-gray-700"
          initial="initial"
          animate={textVisible ? "animate" : "initial"} // Animate text visibility
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.3 }} // Delay text animation
        >
          Congratulations! You have just completed your training in product
          management, UI/UX design, or front-end/back-end development, and now
          it is time to put those skills into practice. Welcome to Enoverlab, a
          platform built to help you apply everything you have learned in
          real-world scenarios. Whether you are a product manager fine-tuning
          strategies, a designer crafting user experiences, or a
          front-end/back-end developer coding up the future, Enoverlab is the
          place where theory meets execution. Here, you will collaborate,
          experiment, and refine your craft, gaining the experience you need to
          thrive in your field. Ready to turn your knowledge into impact?
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AboutInternship;
