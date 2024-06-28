import { DropdownSVG, HamburgerSVG } from "@/constant/SVGs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RightArrowCTAButton from "./RightArrowCTAButton";

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

        <span className="hidden items-center gap-6 lg:flex">
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

        <RightArrowCTAButton
          text="Contact Us"
          buttonStyles="border-primary-300 text-primary-300 !hidden sm:!flex"
          arrowColor="#0046FF"
        />

        {/* Hamburger */}
        <button className="inline-flex sm:hidden">
          <HamburgerSVG />
        </button>
      </div>
    </nav>
  );
}
