import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const images = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
    '/images/hero4.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      {/* Background Image Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100 ' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]object-cover"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32 md:py-40 lg:py-48">
        
        {/* Animated Heading */}
        <h1
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg leading-tight 
          opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
        >
          CPI MANAGEMENT AND TECHNOLOGY
        </h1>

        {/* Subheading */}
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 md:mb-10 drop-shadow-lg">
          MIRPUR : 06 , DHAKA : 1216
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-7 w-full sm:w-auto px-4 sm:px-0">
          <button className="bg-blue-800 hover:bg-blue-800 hover:-translate-y-1 text-yellow-400 font-semibold px-6 sm:px-8 py-3 rounded-md shadow-lg transition-all duration-300 w-full sm:w-auto">
            Admission now
          </button>

          <button className="bg-yellow-400 hover:bg-yellow-400 hover:-translate-y-1 text-[#0A2463] font-semibold px-6 sm:px-8 py-3 rounded-md shadow-lg transition-all duration-300 w-full sm:w-auto">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
