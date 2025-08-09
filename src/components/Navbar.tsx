'use client'
import MaxWidth from "@/constant/MaxWidth";
import { DropdownSVG, HamburgerSVG } from "@/constant/SVGs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io"; // Importing the icon

const navLinks = [
  { name: "Programs", href: "/", dropdown: true },
  { name: "Blog", href: "/" },
  { name: "Free Resources", href: "/" },
  { name: "Partnership", href: "/" },
];

export default function Navbar() {
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //   // Toggle function for sidebar
  //   const toggleSidebar = () => {
  //     setIsSidebarOpen(!isSidebarOpen);
  //   };

  return (
    <>
      {/* Main Navbar */}
      {/* <nav className="z-50 w-[1155px h-[72px] rounded-[30px] bg-white backdrop-blur-md"> */}
      {/* <MaxWidth className="flex items-center justify-between w-full px-5"></MaxWidth> */}
      <nav className="mt-[24px]">
        <div className="w-80% container flex flex-row justify-evenly items-center bg-white mx-auto rounded-[30px]">
          <div className="">
            {/* Logo */}
            <Image
              src={"/image 12 (1).jpg"}
              width={225}
              height={0}
              alt="Enoverlab Logo"
              objectFit="contain"
              className="w-[138px] sm:w-[225px]"
            />
          </div>

          <div className="">            
            {/* Desktop Navigation Links */}
            <span className="hidden items-center gap-10 lg:flex lg:justify-center lg:w-full">
              {navLinks.map((item, index) => (
                <Link
                  className="flex items-center font-plus-jakarta-sans text-lg font-normal text-[20px] text-[#0000FF]"
                  href={item.href}
                  key={index}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <DropdownSVG />}
                </Link>
              ))}
            </span>
          </div>

          <div className="">
            {/* contat us Button */}
            <button type="button" className="bg-blue-700 rounded-lg text-sm my-3 px-7 py-1.5 text-center">
              <Link
                href="/contact-us"
                target="_blank"
                className=" items-center font-Plus Jakarta Sans justify-center rounded-[10px] text-[20px] text-white"
              >
                Contact Us
              </Link>
            </button>
          </div>

          {/* Hamburger Icon for Mobile */}
          {/* <button className="inline-flex sm:hidden" onClick={toggleSidebar}>
            <HamburgerSVG />
          </button> */}
        </div>
      </nav>
    </>
  )
};