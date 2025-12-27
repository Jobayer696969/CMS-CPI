import React from "react";

const AboutUs = () => {
  return (
    // ID ADDED HERE
    <div
      id="about-section"
      className="w-full bg-[#111D3A] py-12 px-4 sm:px-6 lg:px-8 underline-offset-4"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-8">
          <h2 className="text-xl sm:text-3xl font-bold text-white border-b-4 border-black inline-block pb-1">
            About us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2 text-yellow-400 ">
                History of
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-2">
                CPI MANAGMENT AND
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-yellow-400">
                TECHNOLOGY
              </h1>
            </div>
            <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                CPI (Center of Precision & Innovation) Polytechnic has
                established itself as a cornerstone of technical excellence and
                vocational training in the region. Founded with the mission to
                bridge the gap between theoretical knowledge and industrial
                application, the institute has spent years cultivating a rich
                environment for aspiring engineers and technologists. From its
                humble beginnings, it has grown into a premier destination for
                students seeking standardized training and mastery in various
                technical disciplines. The institute’s journey is defined by its
                commitment to modernizing technical education. Over the decades,
                CPI has consistently upgraded its laboratories and workshops to
                keep pace with global technological shifts, ensuring that
                students like Tariqul Islam and teams like Team Fighter have the
                resources to build award-winning AI projects. By fostering a
                culture of innovation, CPI Polytechnic doesn't just teach
                engineering; it prepares students to solve real-world
                problems—whether that is developing AI-powered robotics for
                local competitions or designing lunar rovers for global
                exploration themes. Today, with a growing alumni network and a
                faculty dedicated to student success, CPI continues to lead the
                way in technical education. It remains a place where
                "standardized training meets excellence," empowering the next
                generation of innovators to reach their full potential and bring
                pride to the campus through their achievements.
              </p>
            </div>
          </div>

          <div className="w-full space-y-6">
            <img
              src="/images/About Image.jpg"
              alt="CPI Students"
              className="w-full rounded-lg shadow-lg object-cover"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">
                  2000+
                </div>
                <div className="text-sm font-bold text-black uppercase">
                  STUDENTS IN CAMPUS
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">7</div>
                <div className="text-sm font-bold text-black uppercase">
                  DEPARTMENTS
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 text-center col-span-2">
                <div className="text-4xl font-bold text-blue-500 mb-2">
                  100%
                </div>
                <div className="text-sm font-bold text-black uppercase">
                  GOOD RESULT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
