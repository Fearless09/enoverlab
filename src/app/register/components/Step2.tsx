"use client";

import { UseGlobalContext } from "@/app/provider";
import React, { useState } from "react";
import FormCTAButton from "./FormCTAButton";

const internshipArr: {
  internship: string;
  start: string;
  end: string;
}[] = [
  {
    internship: "Internship P50",
    start: "March 15th",
    end: "June 15th",
  },
  {
    internship: "Internship D43",
    start: "March 30th",
    end: "July 11th",
  },
];

export default function Step2() {
  const { setSteps } = UseGlobalContext();
  const [internshipState, setInternshipState] = useState<{
    internship: string;
    start: string;
    end: string;
  }>(internshipArr[0]);

  return (
    <>
      <h1 className="text-xl font-medium leading-9 text-primary-300 md:text-[26px]">
        You are halfway there: select a time and group that works for you
      </h1>

      <form className="mt-10 @container/form sm:mt-[68px]">
        <div className="grid gap-[26px] @[360px]/form:grid-cols-2">
          {internshipArr?.map((item, index) => (
            <InternshipCard
              key={index}
              item={item}
              active={internshipState === item}
              onclick={() => setInternshipState(item)}
            />
          ))}
        </div>

        <FormCTAButton
          text="Continue"
          style="mt-[59px]"
          onclick={() => setSteps(3)}
        />
      </form>
    </>
  );
}

function InternshipCard({
  active,
  onclick,
  item: { internship, start, end },
}: {
  item: {
    internship: string;
    start: string;
    end: string;
  };
  active: boolean;
  onclick: () => void;
}) {
  return (
    <button
      className={`relative flex h-[220px] flex-col gap-[15px] rounded-[7px] border px-[19px] py-[47px] ${
        active
          ? "border-primary-300 bg-primary-300 text-white"
          : "border-[#727272] bg-white text-secondary"
      }`}
      onClick={onclick}
      type="button"
    >
      <div className="absolute right-[19px] top-[12px] h-[14px] w-[14px] bg-white"></div>

      <h5 className="text-lg font-medium sm:text-2xl">{internship}</h5>
      <div className="flex items-center gap-1 text-sm sm:text-base">
        <span className="w-[43px] font-medium">Start:</span>
        <span className="font-light">{start}</span>
      </div>
      <div className="flex items-center gap-1 text-base">
        <span className="w-[43px] font-medium">End:</span>
        <span className="font-light">{end}</span>
      </div>
    </button>
  );
}
