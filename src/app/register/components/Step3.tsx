"use client";
import { cn } from "@/lib/utils";
import React, { ComponentProps, FC, memo, useTransition, useState } from "react";
import FormButton from "./FormButton";
import { useRouter } from "next/navigation";
import CustomBounceAnimation from "@/constant/CustomBounceAnimation";

const Step3 = ({
  userDetails,
  onEdit,
}: {
  userDetails: Step1FormType;
  onEdit: () => void;
}) => {
  const [isTransition, startTransition] = useTransition();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();

  const onNext = async () => {
    startTransition(async () => {
      try {
        const response = await fetch('/register/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: userDetails.name,
            number: userDetails.number,
            email: userDetails.email,
            internship_role: userDetails.internship_role,
            experience_level: userDetails.experience_level,
            expectation_onboarding: "To become a team player",
            hear_about_us: userDetails.hear_about_us,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to submit details.');
        }

        // Redirect to the welcome page after successful submission
        router.replace("/welcome");
      } catch (error) {

        if (error instanceof Error) {
          setSubmitError(error.message);
        } else {
          setSubmitError("An unexpected error occurred.");
        }
      }
    });
  };

  return (
    <div className="mx-auto mt-16 w-full max-w-[650px]">
      <h1 className="text-2xl text-primary-300">
        Please review your submission.
      </h1>
      <p className="mt-2.5">Update any relevant information as needed</p>
      <hr className="mb-6 mt-14 border-black/20" />
      <button
        className="ms-auto flex hover:opacity-90 active:translate-y-0.5"
        onClick={onEdit}
      >
        Edit
      </button>
      <div className="flex flex-col gap-5">
        <FlexItem name="First Name and Last Name?" value={userDetails.name} />
        <FlexItem name="Phone number" value={userDetails.number} />
        <FlexItem name="Email Address" value={userDetails.email} />
        <FlexItem name="What is your internship Role?" value={userDetails.internship_role} />
        <FlexItem name="What is your experience level?" value={userDetails.experience_level} />
        <FlexItem name="What is your expectation onboarding with a team?" value="To become a team player" />
        <FlexItem name="How did you hear about us?" value={userDetails.hear_about_us} />
      </div>
      {submitError && <p className="text-red-500 mt-4">{submitError}</p>}
      <hr className="my-14 border-black/20" />
      <FormButton
        className="mx-auto max-w-[400px]"
        disabled={isTransition}
        onClick={onNext}
      >
        {isTransition ? <CustomBounceAnimation className="bg-white" /> : "Submit"}
      </FormButton>
    </div>
  );
};

export default memo(Step3);

type FlexItemProps = ComponentProps<"div"> & {
  name: string;
  value: string | number;
};

const FlexItem: FC<FlexItemProps> = memo(function FlexItem({
  name,
  value,
  className,
  ...props
}) {
  return (
    <div
      className={cn("flex items-center justify-between font-light", className)}
      {...props}
    >
      <span className="text-secondary/70">{name}</span>
      <span className="text-right text-black">{value}</span>
    </div>
  );
});
