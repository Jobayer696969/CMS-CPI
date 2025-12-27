import React from "react";

const Achievement = () => {
  return (
    // ID ADDED HERE
    <div id="achievement-section" className="w-full py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1a2942' }}>
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-12">Achievement</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div className="w-full">
            <img src="/images/Achivement1.jpg" alt="Team Fighter" className="w-full h-[450px] rounded-lg shadow-2xl object-cover" />
          </div>
          <div className="flex flex-col justify-center space-y-6 text-yellow-300">
            <h2 className="text-3xl font-bold">Team Fighter</h2>
            <p className="text-gray-300 text-lg">The halls of Prime University were buzzing with innovation as Team Fighter from CPI Polytechnic stepped onto the stage to showcase their latest breakthrough. Led by the visionary efforts of Tariqul Islam, the team presented a cutting-edge AI-powered robot that immediately captured the attention of every judge and attendee in the room. This project was a sophisticated fusion of advanced robotics and artificial intelligence, reflecting months of tireless work within the labs of CPI Polytechnic. Tariqul Islam’s leadership was evident in every movement of the robot, as it navigated complex tasks with an intelligence that stood out among the competition. When the final results were announced, the room erupted in applause as Team Fighter was declared the winner, marking a historic moment for our campus. This victory serves as a powerful testament to the technical grit of CPI Polytechnic students and their ability to master the technologies of the future.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6 text-yellow-300">
            <h2 className="text-3xl font-bold">Our NASA Boy</h2>
            <p className="text-gray-300 text-lg">
              <span className="text-[#F5D22A] font-bold">Md Rifat Ahmed</span> CPI Polytechnic is also incredibly proud of Rifat, who recently represented our campus at Prime University with a groundbreaking lunar exploration project. Rifat showcased a highly specialized robot designed to navigate the rugged surface of the moon, a feat that requires immense technical skill. His project focused on the critical mission of autonomous movement and data collection, featuring a system where the robot could gather lunar data and transmit it back to scientists. While the top prize went elsewhere, the achievement of being selected to showcase such a high-level theme project at Prime University is a victory in itself. Rifat’s participation proves that CPI Polytechnic students have the courage and capability to tackle the greatest challenges in space robotics. He has brought immense honor to our campus, and we celebrate his dedication to pushing the boundaries of what is possible.
            </p>
          </div>
          <div className="w-full">
            <img src="/images/Achivement2.jpg" alt="NASA Student" className="w-full h-[500px] rounded-lg shadow-2xl object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;