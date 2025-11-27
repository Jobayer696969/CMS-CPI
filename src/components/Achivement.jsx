import React from "react";

// ===================================================================
// Achievement Component
// Displays team achievements and proud student accomplishments
// ===================================================================
const Achievement = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1a2942' }}>
      <div className="max-w-[1440px] mx-auto">
        
        {/* ===================================================================
            Achievement Title
            =================================================================== */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-12">
          Achievement
        </h1>

        {/* ===================================================================
            Team Fighter Section - Image Left, Content Right
            =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Left Column - Team Image */}
          <div className="w-full">
            <img 
              src="/images/Achivement1.jpg" 
              alt="Team Fighter Championship" 
              className="w-full h-[450px] rounded-lg shadow-2xl object-cover"
            />
          </div>

          {/* Right Column - Team Fighter Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="w-full max-w-[500px]">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Team Fighter
              </h2>
            </div>
            <div className="w-full max-w-[500px]">
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
                Prime University projects showing<br/> 
                was held. Our team participated in <br/> 
                the fighter there. And became the <br/> 
                first Champions.
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================================
            Our Proud Student Section - Content Left, Image Right
            =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Student Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="w-full max-w-[500px]">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Our Proud Student
              </h2>
            </div>
            <div className="w-full max-w-[500px]">
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
                <span className="text-[#F5D22A] font-bold text-xl">Md Rifat Ahmed</span> He was participating in<br/> 
                the NASA competition, and got the <br/> 
                opportunity to go to NASA. He is the only<br/> 
                student from all over Bangladesh who got<br/> 
                the opportunity to go to NASA.
              </p>
            </div>
          </div>

          {/* Right Column - NASA Image */}
          <div className="w-full">
            <img 
              src="/images/Achivement2.jpg" 
              alt="Md Rifat Ahmed at NASA" 
              className="w-full h-[500px] rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Achievement;