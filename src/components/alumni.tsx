import React from "react";
import { Play } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Happiness Adaobi",
    role: "Product Designer",
  },
  {
    name: "Happiness Adaobi",
    role: "Product Designer",
  },
  {
    name: "Happiness Adaobi",
    role: "Product Designer",
  },
];

export default function AlumniTestimonials() {
  return (
    <div className="hidden w-full px-4 py-16 sm:block md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto mb-16 w-full max-w-[641px] text-center">
          <h1 className="text-2xl font-medium text-primary-300 sm:text-4xl">
            Our Alumni Speaks
          </h1>

          <p className="mt-4 text-base font-normal leading-[160%] text-secondary sm:text-lg">
            Discover the impact our program has had on past interns, Hear from
            our alumni about their experience and how this internship shaped
            their careers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Image Container */}
              <div className="relative h-[280px] w-full lg:h-[350px]">
                {" "}
                {/* Adjusted height for rectangular shape */}
                <div className="absolute inset-0 bg-gray-200" />{" "}
                {/* Placeholder background */}
                <Image
                  src="/api/placeholder/400/320"
                  alt={`${testimonial.name}'s testimonial`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                      <Play className="h-6 w-6 text-black" />
                    </button>
                  </div>
                  {/* Text Overlay - Moved inside the dark overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="mb-1 text-xl font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="mt-8 flex justify-end">
          <button className="flex items-center text-[#666666] transition-colors duration-300 hover:text-[#0066FF]">
            <span className="mr-2">See all</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
