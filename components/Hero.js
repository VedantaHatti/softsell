'use client';

import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Importing the down arrow icon

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to scroll to the next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('how-it-works');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen bg-gradient-to-br from-pink-400 via-purple-200 to-indigo-300 overflow-hidden text-gray-900">
      {/* Blurred color blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        
      {/* Full-page Grid + Two Waves */}
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
          {/* Grid Pattern */}
          <defs>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" opacity="0.3" />

          {/* Top Animated Wave */}
          <path
            fill="none"
            stroke="white"
            strokeOpacity="0.6"
            strokeWidth="1.5"
            d="M0,100 C360,150 1080,50 1440,100"
          >
            <animate
              attributeName="d"
              dur="3s"
              repeatCount="indefinite"
              values="
                M0,100 C360,150 1080,50 1440,100;
                M0,110 C360,140 1080,60 1440,110;
                M0,100 C360,150 1080,50 1440,100
              "
            />
          </path>

          {/* Bottom Animated Wave */}
          <path
            fill="none"
            stroke="white"
            strokeOpacity="0.9"
            strokeWidth="1.5"
            d="M0,220 C360,270 1080,170 1440,220"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,220 C360,270 1080,170 1440,220;
                M0,230 C360,260 1080,180 1440,210;
                M0,220 C360,270 1080,170 1440,220
              "
            />
          </path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 flex items-center justify-center h-full text-center z-10">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Sell Software Licenses <span className="text-indigo-700">Instantly</span>
          </h1>
          <p className="text-lg md:text-2xl mt-4 mb-8 max-w-2xl mx-auto text-gray-800">
            Get the best valuation, skip the hassle, and receive instant payments for your unused software licenses.
          </p>
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
            Get a Quote
          </button>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div
        onClick={scrollToNextSection} // When clicked, it will scroll to the next section
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer text-white text-4xl md:text-5xl animate-bounce"
      >
        <FaChevronDown /> {/* Using FontAwesome Chevron Down Icon */}
      </div>
    </section>
  );
}
