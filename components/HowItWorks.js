'use client';

import { useState } from 'react';
import { AiOutlineUpload, AiOutlineAppstoreAdd, AiOutlineDollarCircle } from 'react-icons/ai'; // Import relevant icons from React Icons

export default function Timeline() {
  const steps = [
    {
      title: 'Step 1: Upload Your License',
      description: 'Submit your unused software licenses through our easy-to-use platform.',
      icon: <AiOutlineUpload className="w-8 h-8 text-black" />, // Black icon color
    },
    {
      title: 'Step 2: Get a Valuation',
      description: 'Our system calculates the market value of your license automatically.',
      icon: <AiOutlineAppstoreAdd className="w-8 h-8 text-black" />, // Black icon color
    },
    {
      title: 'Step 3: Receive Instant Payment',
      description: 'After you accept the offer, receive your payment instantly.',
      icon: <AiOutlineDollarCircle className="w-8 h-8 text-black" />, // Black icon color
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8 text-teal-400">How It Works</h2>

        {/* Flex container for centering the steps */}
        <div className="flex justify-center items-center space-x-8 z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center space-y-4 transform transition-transform duration-300 hover:scale-105 hover:rotate-3d cursor-pointer"
            >
              {/* 3D Box */}
              <div className="w-64 h-64 p-6 bg-teal-400 rounded-lg shadow-xl transform perspective-1000 hover:rotate-y-10 hover:shadow-2xl transition-all ease-in-out">
                {/* Circle Marker */}
                <div className="w-12 h-12 flex items-center justify-center bg-teal-500 rounded-full shadow-lg text-white z-10 mb-4">
                  {step.icon}
                </div>

                {/* Step Content */}
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-teal-800">{step.title}</h3>
                  <p className="mt-2 text-lg text-white opacity-80">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
