'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const portfolioData = [
  {
    id: 1,
    title: 'Youtube Project',
    cohort: 'Cohort 40',
    imageUrl: '/api/placeholder/400/250'
  },
  {
    id: 2,
    title: 'Mobile App Design',
    cohort: 'Cohort 39',
    imageUrl: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'Web Development',
    cohort: 'Cohort 38',
    imageUrl: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: 'UI/UX Design',
    cohort: 'Cohort 37',
    imageUrl: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: 'Machine Learning',
    cohort: 'Cohort 36',
    imageUrl: '/api/placeholder/400/250'
  }
];

export default function StudentPortfolioSlider() {
  const [screenSize, setScreenSize] = useState('small');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Check screen size on mount
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize('large'); // Large screens: 1024px and up
      } else if (window.innerWidth >= 768) {
        setScreenSize('medium'); // Medium screens: 768px to 1023px
      } else {
        setScreenSize('small'); // Small screens: below 768px
      }
    };

    handleResize(); // Run on component mount
    window.addEventListener('resize', handleResize); // Run on window resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlides =
        screenSize === 'large'
          ? Math.ceil(portfolioData.length / 3)
          : screenSize === 'medium'
          ? Math.ceil(portfolioData.length / 2)
          : portfolioData.length;
      return prev === maxSlides - 1 ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlides =
        screenSize === 'large'
          ? Math.ceil(portfolioData.length / 3)
          : screenSize === 'medium'
          ? Math.ceil(portfolioData.length / 2)
          : portfolioData.length;
      return prev === 0 ? maxSlides - 1 : prev - 1;
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h1 className="text-2xl font-medium text-primary-300 sm:text-4xl text-center mb-8">
        Students Portfolios
      </h1>
      <p className="text-center mb-8 text-gray-600">
        Check out amazing work by previous Enverlab interns
      </p>

      {/* Conditionally Render the Layout Based on Screen Size */}
      {screenSize === 'large' ? (
        <LargeScreenSlider
          currentSlide={currentSlide}
          portfolioData={portfolioData}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      ) : screenSize === 'medium' ? (
        <MediumScreenSlider
          currentSlide={currentSlide}
          portfolioData={portfolioData}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      ) : (
        <SmallScreenSlider
          currentSlide={currentSlide}
          portfolioData={portfolioData}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      )}
    </div>
  );
}

function LargeScreenSlider({ currentSlide, portfolioData, nextSlide, prevSlide }) {
    const itemsPerSlide = 3;
    const currentItems = portfolioData.slice(
      currentSlide * itemsPerSlide,
      (currentSlide + 1) * itemsPerSlide
    );
  
    return (
      <div className="grid grid-cols-3 gap-4">
        {currentItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-blue-600 p-6 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-64 w-full">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="text-white mt-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm">{item.cohort}</p>
            </div>
          </motion.div>
        ))}
  
        {/* Prev/Next Buttons */}
        <div className="flex space-x-4 mt-6">
          <button
            onClick={prevSlide}
            className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
  
          <button
            onClick={nextSlide}
            className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }
  
  function MediumScreenSlider({ currentSlide, portfolioData, nextSlide, prevSlide }) {
    const itemsPerSlide = 2;
    const currentItems = portfolioData.slice(
      currentSlide * itemsPerSlide,
      (currentSlide + 1) * itemsPerSlide
    );
  
    return (
      <div className="grid grid-cols-2 gap-4">
        {currentItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-blue-600 p-6 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-64 w-full">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="text-white mt-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm">{item.cohort}</p>
            </div>
          </motion.div>
        ))}
  
        {/* Prev/Next Buttons */}
        <div className="flex justify-start space-x-4 mt-6">
          <button
            onClick={prevSlide}
            className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
  
          <button
            onClick={nextSlide}
            className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }
  
  function SmallScreenSlider({ currentSlide, portfolioData, nextSlide, prevSlide }) {
    const currentItem = portfolioData[currentSlide];
  
    return (
      <div className="grid grid-cols-1 gap-4">
        <motion.div
          key={currentItem.id}
          className="relative bg-blue-600 p-6 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-64 w-full">
            <Image
              src={currentItem.imageUrl}
              alt={currentItem.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="text-white mt-4">
            <h3 className="text-lg font-semibold">{currentItem.title}</h3>
            <p className="text-sm">{currentItem.cohort}</p>
          </div>
        </motion.div>
  
        {/* Prev/Next Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={prevSlide}
            className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
  
          <button
            onClick={nextSlide}
            className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }
  