"use client";

import React from "react";
import FormInputText from "./FormInputText";
import { DropdownSVG } from "@/constant/SVGs";
import RadioCheck from "./RadioCheck";
import FormCTAButton from "./FormCTAButton";
import { UseGlobalContext } from "@/app/provider";

export default function Step1() {
  const { setSteps } = UseGlobalContext();

  return (
    <>
      <h1 className="text-xl font-medium text-primary-300 md:text-2xl">
        Welcome to your internship! Fill out your details to get started on this
        exciting journey!
      </h1>

      <form className="mt-[26px] text-secondary">
        <FormInputText name="full_name" label="Full Name" required={true} />

        <FormInputText
          name="phone_number"
          label="Phone Number"
          type="tel"
          containerStyle="mt-4"
          required={true}
        />

        <FormInputText
          name="email_address"
          label="Email Address"
          type="email"
          containerStyle="mt-4"
          required={true}
        />

        <FormInputText
          name="class_name"
          label="Class Name (E.g Cohort 35p)"
          containerStyle="mt-4"
          required={true}
        />

        <div className={`mt-5 flex flex-col gap-2`}>
          <label htmlFor={"internship_role"} className="text-base font-medium">
            Internship Role*
          </label>
          <div className="relative">
            <select
              name="internship_role"
              className="h-[50px] w-full rounded-[7px] border border-secondary-100 px-[26px] text-base font-medium text-secondary"
            >
              <option value="product manager">Product Manager</option>
              <option value="product designer">Product Designer</option>
              <option value="frontend developer">Frontend Developer</option>
            </select>

            <button
              className="absolute right-[6px] top-1/2 z-10 h-[45px] -translate-y-1/2 bg-white pe-5"
              type="button"
            >
              <DropdownSVG />
            </button>
          </div>
        </div>

        <FormInputText
          name="your_experience"
          label="Share your training experience with us"
          containerStyle="mt-[30px]"
        />

        <div className={`mt-[30px] flex flex-col gap-2.5`}>
          <label
            htmlFor={"availability"}
            className="text-base font-medium leading-[140%]"
          >
            This internship is a eight(8) weeks internship, would you be
            available?*
          </label>
          <div className="flex items-center gap-6">
            <RadioCheck name="availability" label="Yes" />
            <RadioCheck name="availability" label="No" />
          </div>
        </div>

        {/* CTA Button Here */}
      </form>

      <FormCTAButton text="Next" style="mt-8" onclick={() => setSteps(2)} />
    </>
  );
}
