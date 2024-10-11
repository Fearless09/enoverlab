import { DropdownSVG, HamburgerSVG } from "@/constant/SVGs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks: {
  name: string;
  href: string;
  dropdown?: boolean;
}[] = [
  {
    name: "Programs",
    href: "/",
  },
  {
    name: "Internship",
    href: "/",
    dropdown: true,
  },
  {
    name: "Blog",
    href: "/",
  },
  {
    name: "Free Resources",
    href: "/",
  },
];

export default function Navbar() {
  return (
    <nav className="mt-[34px] px-2">
      <div className="container mx-auto flex w-full items-center justify-between">
        <Image
          src={"/enoverlab_logo.png"}
          width={225}
          height={0}
          alt="Enoverlab Logo"
          objectFit="contain"
          className="w-[138px] sm:w-[225px]"
        />

        <span className="hidden items-center gap-4 space-x-5 lg:flex">
          {navLinks?.map((item, index) => (
            <Link
              className="flex items-center gap-1.5 font-plus-jakarta-sans text-lg font-normal text-secondary"
              href={item.href}
              key={index}
            >
              <span>{item.name}</span>
              {item.dropdown && <DropdownSVG />}
            </Link>
          ))}
        </span>

        <button
          className="hidden sm:inline-flex items-center justify-center  px-12 py-3 border border-[#C5C5C5] rounded-[10px] bg-[#0046FF] text-white"
        >
          Enroll
        </button>

        {/* Hamburger */}
        <button className="inline-flex sm:hidden">
          <HamburgerSVG />
        </button>
      </div>
    </nav>
  );
}
