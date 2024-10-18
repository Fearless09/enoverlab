import React from "react";

export default function RadioCheck({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  return (
    <div className="relative flex items-center gap-2">
      <input
        type="radio"
        name={name}
        className="peer absolute left-0 top-1/2 h-[13px] w-[13px] -translate-y-1/2 opacity-0"
      />
      <div className='h-[13px] w-[13px] rounded-[2px] border border-secondary text-white peer-checked:!border-primary-300 peer-checked:bg-primary-300 peer-checked:content-["*"]'></div>
      <span className="text-base font-medium text-secondary">{label}</span>
    </div>
  );
}
