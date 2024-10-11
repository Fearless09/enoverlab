import React from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Happiness Adaobi',
    role: 'Product Designer',
  },
  {
    name: 'Happiness Adaobi',
    role: 'Product Designer',
  },
  {
    name: 'Happiness Adaobi',
    role: 'Product Designer',
  },
];

export default function AlumniTestimonials() {
  return (
    <div className="w-full py-16 px-4 md:px-6 lg:px-8 hidden sm:block">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mx-auto w-full max-w-[641px] text-center mb-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl">
              {/* Image Container */}
              <div className="relative w-full h-[280px] lg:h-[350px]"> {/* Adjusted height for rectangular shape */}
                <div className="absolute inset-0 bg-gray-200" /> {/* Placeholder background */}
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
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-black" />
                    </button>
                  </div>
                  {/* Text Overlay - Moved inside the dark overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">
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
        <div className="flex justify-end mt-8">
          <button className="flex items-center text-[#666666] hover:text-[#0066FF] transition-colors duration-300">
            <span className="mr-2">See all</span>
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}