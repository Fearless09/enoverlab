"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MaxWidth from "@/constant/MaxWidth";
import useAnimateObserver from "@/hooks/useAnimateObserver";

const AboutInternship: React.FC = () => {
  const [textVisible, setTextVisible] = useState(false);
  const { ref, hasAnimated } = useAnimateObserver();

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
    if (hasAnimated) {
      // After the box is visible, show the text
      const timer = setTimeout(() => setTextVisible(true), 300); // Delay for text animation
      return () => clearTimeout(timer);
    } else {
      setTextVisible(false); // Reset text visibility when not visible
    }
  }, [hasAnimated]);

  return (
    <motion.div
      id="About Internship"
      ref={ref} // Attach the ref to the main container
      className="mt-12 flex items-center justify-center bg-[#E0E9FE] px-4 py-4 font-plus-jakarta-sans md:py-20"
      initial="initial"
      animate={hasAnimated ? "animate" : "initial"} // Animate box visibility
      exit="initial" // No exit animation for the box
      variants={boxVariants}
      transition={{ duration: 0.5 }} // Animation duration for the box
    >
      <MaxWidth className="rounded bg-white pb-4 pt-8 shadow-md md:px-8 md:pb-[45px] md:pt-[70px] ipad:px-20">
        <motion.h2
          className="mb-3 text-center text-2xl font-semibold text-[#0046FF] md:mb-8 md:text-4xl"
          initial="initial"
          animate={textVisible ? "animate" : "initial"} // Animate text visibility
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.3 }} // Delay text animation
        >
          About Internship
        </motion.h2>
        <motion.p
          className="text-justify text-base font-light !leading-[180%] text-[#323232] md:text-lg"
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
      </MaxWidth>
    </motion.div>
  );
};

export default AboutInternship;
