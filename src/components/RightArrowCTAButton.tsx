import { RightArrowSVG } from "@/constant/SVGs";
import React from "react";

export default function RightArrowCTAButton({
  buttonStyles,
  arrowColor,
  text,
  onclick,
}: {
  buttonStyles: string;
  arrowColor?: string;
  text: string;
  onclick?: () => void;
}) {
  return (
    <button
      className={`flex h-[51px] w-[208px] items-center justify-center gap-4 rounded-[7px] border hover:opacity-[0.95] active:scale-[0.98] ${buttonStyles}`}
      onClick={onclick}
    >
      <span className="text-sm sm:text-sm">{text}</span>
      <RightArrowSVG color={arrowColor} />
    </button>
  );
}
