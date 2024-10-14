import { RightArrowSVG } from "@/constant/SVGs";
import { cn } from "@/lib/utils";
import React, { ComponentProps, FC } from "react";


interface RightArrowCTAButtonProps extends ComponentProps<"button"> {
  arrow?: boolean;
}

const RightArrowCTAButton: FC<RightArrowCTAButtonProps> = ({
  className,
  children,
  arrow = true,
  ...props
}) => {
  return (
    <button
      className={cn(
        "flex h-[51px] w-[208px] items-center justify-center gap-4 rounded-[7px] hover:opacity-[0.95] active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      {children}
      {arrow && <RightArrowSVG />}
    </button>
  );
};

export default RightArrowCTAButton;
