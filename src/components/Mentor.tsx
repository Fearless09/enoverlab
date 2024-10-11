import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const mentors = [
  {
    name: "Sarah Ibeji",
    role: "Product Partnership Manager",
    subRole: "Lead Internship Mentor",
    imageUrl: "/Sarah.png ",
  },
  {
    name: "Imelda Onyebueke",
    role: "Internship Product Manager",
    imageUrl: "/Imelda.png",
  },
];

export default function MentorsSection() {
  return (
    <div className="w-full px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Meet Your Mentors</h2>
          <p className="mx-auto max-w-2xl text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {mentors.map((mentor, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image Container */}
              <div className="relative mb-4 h-64 w-64">
                <Image
                  src={mentor.imageUrl}
                  alt={mentor.name}
                  fill
                  className="rounded-lg object-cover object-center shadow-sm"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>

              {/* Mentor Info */}
              <h3 className="mb-2 text-xl font-semibold">{mentor.name}</h3>
              <p className="mb-1 text-center text-[#666666]">{mentor.role}</p>
              {mentor.subRole && (
                <p className="mb-2 text-center text-[#666666]">
                  {mentor.subRole}
                </p>
              )}

              {/* LinkedIn Icon */}
              <a href="#" className="mt-2">
                <FaLinkedin className="h-8 w-8 text-[#0077B5] transition-colors duration-300 hover:text-[#00669C]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
