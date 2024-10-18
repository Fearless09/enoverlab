"use client";

import React from "react";

export default function FormCTAButton({
  text,
  onclick,
  style,
}: {
  text: string;
  style?: string;
  onclick?: (e?: any) => void;
}) {
  return (
    <button
      className={`h-12 w-full rounded-[7px] bg-primary-300 text-center font-plus-jakarta-sans text-base font-normal text-white hover:opacity-[0.98] active:scale-[0.98] ${style}`}
      onClick={onclick}
    >
      {text}
    </button>
  );
}
