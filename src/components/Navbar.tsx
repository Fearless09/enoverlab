'use client'
import MaxWidth from "@/constant/MaxWidth";
import { DropdownSVG, HamburgerSVG } from "@/constant/SVGs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io"; // Importing the icon

const navLinks = [
  { name: "Programs", href: "/" },
  { name: "Internship", href: "/", dropdown: true },
  { name: "Blog", href: "/" },
  { name: "Free Resources", href: "/", dropdown: true }, //Add the dropdown to resources
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle function for sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="z-50 bg-white/70 pb-3 pt-5 backdrop-blur-md md:fixed md:inset-x-0 md:top-0">
        <MaxWidth className="flex items-center justify-between w-full px-5">
          {/* Logo */}
          <Image
            src={"/enoverlab_logo.png"}
            width={225}
            height={0}
            alt="Enoverlab Logo"
            objectFit="contain"
            className="w-[138px] sm:w-[225px]"
          />

          {/* Desktop Navigation Links */}
          <span className="hidden items-center gap-10 lg:flex ml-auto">
            {navLinks.map((item, index) => (
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

          {/* Enroll Button */}
          <Link
            href="/register"
            target="_blank"
            className="hidden items-center justify-center rounded-[10px] border border-[#C5C5C5] bg-[#0046FF] px-7 py-2.5 text-sm text-white hover:bg-opacity-95 active:scale-98 sm:inline-flex md:text-base"
          >
            Enroll
          </Link>

          {/* Hamburger Icon for Mobile */}
          <button className="inline-flex sm:hidden" onClick={toggleSidebar}>
            <HamburgerSVG />
          </button>
        </MaxWidth>
      </nav>

      {/* Sidebar for Mobile View */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-blue-400 p-5 text-white sm:hidden">
          {/* Close Button */}
          <button className="mb-4 text-2xl font-bold text-black" onClick={toggleSidebar}>
            X
          </button>
          
          {/* Sidebar Navigation Links */}
          <nav className="flex flex-col gap-4">
            {navLinks.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="text-black flex items-center gap-1.5 font-plus-jakarta-sans text-lg font-normal"
              >
                <span>{item.name}</span>
                {item.dropdown && <IoMdArrowDropdown />} {/*make use the dropdown icon here */}
              </Link>
            ))}
            <Link
              href="/register"
              target="_blank"
              className="mt-4 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-center text-white"
            >
              Enroll Now
            </Link>
          </nav>
        </div>
      )}

      {/* Spacer to prevent layout shift */}
      <div className="h-[82px] w-full max-md:hidden"></div>
    </>
  );
}
