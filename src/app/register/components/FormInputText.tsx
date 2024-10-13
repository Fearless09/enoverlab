import React from "react";

export default function FormInputText({
  name,
  label,
  containerStyle,
  type,
  required,
}: {
  name: string;
  label: string;
  containerStyle?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-2 ${containerStyle}`}>
      <label htmlFor={name} className="text-base font-medium">
        {label} {required && "*"}
      </label>
      <input
        type={type || "text"}
        className="h-[50px] w-full rounded-[7px] border border-secondary-100 px-[26px] text-base font-medium text-secondary placeholder:text-secondary-100"
        // value={""}
        // onChange={() => { }}
        name={name}
        required={required || false}
      />
    </div>
  );
}
