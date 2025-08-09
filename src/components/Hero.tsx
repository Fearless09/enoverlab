"use client";

import Image from "next/image";
import React from "react";
// import { motion } from "framer-motion";
// import MaxWidth from "@/constant/MaxWidth";
// import useAnimateObserver from "@/hooks/useAnimateObserver";

export default function Hero() {
  //   const [textVisible, setTextVisible] = useState(false);
  //   const { ref, hasAnimated } = useAnimateObserver();

  //   // Animation variants
  //   const boxVariants = {
  //     initial: { opacity: 0, scale: 0.5 }, // Start state for the box
  //     animate: { opacity: 1, scale: 1 }, // End state for the box
  //   };

  //   const textVariants = {
  //     initial: { opacity: 0, x: -100 }, // Start state for the text
  //     animate: { opacity: 1, x: 0 }, // End state for the text
  //   };

  //   useEffect(() => {
  //     if (hasAnimated) {
  //       // After the box is visible, show the text
  //       const timer = setTimeout(() => setTextVisible(true), 300); // Delay for text animation
  //       return () => clearTimeout(timer);
  //     } else {
  //       setTextVisible(false); // Reset text visibility when not visible
  //     }
  //   }, [hasAnimated]);

  return (
    <>
      <div className="bg-[#DAEDFF] mt-[76px] rounded-[30px]">
        <div className="flex flex-row gap-4 justify-center px-[13.33px] py-[120px] items-center rounded-[30px]">
          <div className="px-[31px]">
            <h1 className="font-Inter font-semibold text-[48px] text-left text-[#404040]">
              Partner with Enoverlab
            </h1>
            <p className="font-Inter text-[16px] text-left text-[#404040]">
              Join force with the platform trusted by 100,000 industry to provide reliable and Accountable services
            </p>
          </div>
          <div>
            <Image src="/Whisk_ac0cd07e40 1.png" alt="Hero image" width={619.67} height={292} className="rounded-[30px]" />
          </div>
        </div>   
      </div>
    </>
  )
};
