"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import FormCTAButton from "../register/components/FormCTAButton";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 overflow-hidden bg-white px-5 pt-10 font-plus-jakarta-sans sm:pt-[87px]">
      <Link href={"/"}>
        <Image
          src={"/enoverlab_logo.png"}
          width={225}
          height={150} // Provide a valid height value
          alt="Enoverlab Logo" // Add a descriptive alt text
        />
      </Link>

      <div className="flex w-full flex-1 items-center justify-center">
        <div className="flex max-h-[411px] w-full max-w-[660px] flex-col items-center justify-center rounded-[12px] border border-primary-300 bg-primary-100 px-5 py-20 text-center">
          <h1 className="text-xl font-semibold text-primary-300 sm:text-[32px]">
            Welcome
          </h1>
          <h3 className="mt-2 text-base font-semibold text-primary-300 sm:text-2xl">
            To the Opensource Internship
          </h3>
          <FormCTAButton
            text="Join Internship Team 70"
            style="max-w-[440px] mt-4"
            onclick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
