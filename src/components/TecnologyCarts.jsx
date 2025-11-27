import React, { useState } from "react";

// ===================================================================
// TechnologyCard Component
// Individual card component for displaying technology department info
// ===================================================================
const TechnologyCard = ({ department, onClick }) => {
  return (
    <div className="card card-compact bg-white rounded-xl overflow-hidden shadow-lg transform-gpu transition-transform duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl w-full md:max-w-[320px] h-full flex flex-col group">
      
      {/* Card Image Section */}
      <div className="relative w-full h-40 sm:h-48 md:h-56 flex-shrink-0 p-2">
        <div className="w-full h-full border-4 border-white rounded-xl overflow-hidden relative">
          {/* Department Image */}
          <img
            src={department.image}
            alt={department.title}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 block"
          />
          {/* Gradient overlay that fades in on hover for a nicer effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>

      {/* Card Content Section */}
      <div className="p-4 space-y-2 flex flex-col grow">
        {/* Department Title */}
        <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-tight min-h-10">
          {department.title}
        </h3>

        {/* Institution Name */}
        <p className="text-sm font-medium text-gray-700">
          Cpi management and Technology
        </p>

        {/* Department Description */}
        <p className="text-sm text-gray-600 leading-relaxed grow">
          {department.description}
        </p>

        {/* Learn More Button */}
        <button
          onClick={onClick}
          className="w-full bg-[#111D3A] hover:bg-blue-800 text-white hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-500 text-sm uppercase tracking-wide mt-4 transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 border-2 border-black"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

// ===================================================================
// TechnologyCards Main Component
// Displays grid of technology department cards with modal details
// ===================================================================
const technologyCards = () => {
  // State for tracking selected department for modal
  const [selectedDept, setSelectedDept] = useState(null);

  // ===================================================================
  // Departments Data Array
  // Contains all technology departments information
  // ===================================================================
  const departments = [
    {
      id: 1,
      title: "Computer Science Technology",
      image: "/images/computercard.jpg",
      description:
        "Page layouts look better with something in each section. Web page designers, content writers, and..........",
    },
    {
      id: 2,
      title: "Civil Technology",
      image: "/images/civilcard.jpg",
      description:
        "Page layouts look better with something in each section. Web page designers, content writers, and..........",
    },
    {
      id: 3,
      title: "Electrical Technology",
      image: "/images/electronicscard.jpg",
      description:
        "Page layouts look better with something in each section. Web page designers, content writers, and..........",
    },
    {
      id: 4,
      title: "Automobile Technology",
      image: "/images/automobilecard.jpg",
      description:
        "Page layouts look better with something in each section. Web page designers, content writers, and..........",
    },
    {
      id: 5,
      title: "Mechatronics Technology",
      image: "/images/mechatronicscard.jpg",
      description:
        "Page layouts look better with something in each section. Web page designers, content writers, and..........",
    },
    {
      id: 6,
      title: "Mechanical Technology",
      image: "/images/mechanicalcard.jpg",
      description:
        "Page layouts look better with something in each section. Web page designers, content writers, and..........",
    },
    {
      id: 7,
      title: "Apparel Manufacturing Technology",
      image: "/images/apparelcard.jpg",
      description:
        "Page layouts look better with something in each section. Web page designers, content writers, and..........",
    },
  ];

  return (
    // ===================================================================
    // Main Container with Navy Blue Background
    // ===================================================================
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgba(17, 29, 58, 1)' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* ===================================================================
            Page Title Section
            =================================================================== */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-12">
          Technology
        </h2>

        {/* ===================================================================
            First Row Grid - Displays first 4 departments
            4 columns layout for larger screens
            =================================================================== */}
        <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center mb-12 mx-auto">
          {departments.slice(0, 4).map((dept) => (
            <TechnologyCard
              key={dept.id}
              department={dept}
              onClick={() => setSelectedDept(dept)}
            />
          ))}
        </div>

        {/* ===================================================================
            Second Row Grid - Displays last 3 departments
            3 columns layout for centered appearance
            =================================================================== */}
        <div className="max-w-[950px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center mx-auto mt-8">
          {departments.slice(4, 7).map((dept) => (
            <TechnologyCard
              key={dept.id}
              department={dept}
              onClick={() => setSelectedDept(dept)}
            />
          ))}
        </div>

        {/* ===================================================================
            Modal Section - Shows detailed info when a card is clicked
            =================================================================== */}
        {selectedDept && (
          // Modal Overlay - Closes modal when clicked
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedDept(null)}
          >
            {/* Modal Content Container */}
            <div className="bg-white rounded-2xl max-w-2xl w-full overflow-y-auto shadow-2xl">
              
              {/* ===================================================================
                  Modal Header Section with Image and Close Button
                  =================================================================== */}
              <div className="relative">
                {/* Department Image in Modal */}
                <div className="w-full h-48 sm:h-64 md:h-72 overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedDept.image}
                    alt={selectedDept.title}
                    className="w-full h-full object-cover block"
                  />
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedDept(null)}
                  className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl text-gray-600">×</span>
                </button>
              </div>

              {/* ===================================================================
                  Modal Body Section with Details
                  =================================================================== */}
              <div className="p-6 sm:p-8">
                {/* Department Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  {selectedDept.title}
                </h2>
                
                {/* Institution Name */}
                <p className="text-base sm:text-lg font-semibold text-gray-700 mb-4">
                  Cpi management and Technology
                </p>
                
                {/* Department Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedDept.description}
                </p>

                {/* ===================================================================
                    Course Details Section
                    =================================================================== */}
                <div className="space-y-4 bg-gray-50 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Course Details
                  </h3>
                  
                  {/* Course Information Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Duration */}
                    <div>
                      <p className="text-sm font-semibold text-gray-700">
                        Duration:
                      </p>
                      <p className="text-gray-600">4 Years</p>
                    </div>
                    
                    {/* Degree Type */}
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Degree:</p>
                      <p className="text-gray-600">Diploma in Engineering</p>
                    </div>
                    
                    {/* Admission Status */}
                    <div>
                      <p className="text-sm font-semibold text-gray-700">
                        Admission:
                      </p>
                      <p className="text-gray-600">Open Now</p>
                    </div>
                    
                    {/* Available Seats */}
                    <div>
                      <p className="text-sm font-semibold text-gray-700">
                        Seats Available:
                      </p>
                      <p className="text-gray-600">50 Students</p>
                    </div>
                  </div>
                </div>

                {/* ===================================================================
                    Action Buttons Section
                    =================================================================== */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  {/* Apply Now Button */}
                  <button className="flex-1 bg-[#111D3A] hover:bg-blue-800 hover:text-white text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default technologyCards;