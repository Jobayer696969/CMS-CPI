import React, { useState } from "react";

const TechnologyCard = ({ department, onClick }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform-gpu transition-transform duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl w-full sm:w-[45%] md:w-[22%] lg:w-[22%] flex flex-col group">
      {/* Card Image */}
      <div className="relative w-full h-32 sm:h-40 md:h-44 p-2">
        <div className="w-full h-full border-4 border-white rounded-xl overflow-hidden relative">
          <img
            src={department.image}
            alt={department.title}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col grow">
        <h3 className="text-sm sm:text-base md:text-base font-extrabold text-gray-900 truncate mb-1" title={department.title}>
          {department.title}
        </h3>
        <p className="text-sm font-medium text-gray-700 mb-1">Cpi management and Technology</p>
        <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-2">{department.description}</p>
        <button
          onClick={onClick}
          className="w-full bg-[#111D3A] hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-500 text-sm uppercase tracking-wide transform translate-y-1 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 border-2 border-black"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

const TechnologyCards = () => {
  const [selectedDept, setSelectedDept] = useState(null);

  const departments = [
    { id: 1, title: "Computer Science Technology", image: "/images/computercard.jpg", description: "Page layouts look better with something in each section..." },
    { id: 2, title: "Civil Technology", image: "/images/civilcard.jpg", description: "Page layouts look better with something in each section..." },
    { id: 3, title: "Electrical Technology", image: "/images/electronicscard.jpg", description: "Page layouts look better with something in each section..." },
    { id: 4, title: "Automobile Technology", image: "/images/automobilecard.jpg", description: "Page layouts look better with something in each section..." },
    { id: 5, title: "Mechatronics Technology", image: "/images/mechatronicscard.jpg", description: "Page layouts look better with something in each section..." },
    { id: 6, title: "Mechanical Technology", image: "/images/mechanicalcard.jpg", description: "Page layouts look better with something in each section..." },
    { id: 7, title: "Apparel Manufacturing Technology", image: "/images/apparelcard.jpg", description: "Page layouts look better with something in each section..." },
  ];

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgba(17, 29, 58, 1)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-12">Technology</h2>

        {/* First row - 4 cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {departments.slice(0, 4).map((dept) => (
            <TechnologyCard key={dept.id} department={dept} onClick={() => setSelectedDept(dept)} />
          ))}
        </div>

        {/* Second row - 3 cards centered */}
        <div className="flex flex-wrap justify-center gap-6">
          {departments.slice(4, 7).map((dept) => (
            <TechnologyCard key={dept.id} department={dept} onClick={() => setSelectedDept(dept)} />
          ))}
        </div>

        {/* Modal */}
        {selectedDept && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedDept(null)}
          >
            <div className="bg-white rounded-2xl max-w-2xl w-full overflow-y-auto shadow-2xl">
              <div className="relative">
                <div className="w-full h-48 sm:h-64 md:h-72 overflow-hidden rounded-t-2xl">
                  <img src={selectedDept.image} alt={selectedDept.title} className="w-full h-full object-cover block" />
                </div>
                <button
                  onClick={() => setSelectedDept(null)}
                  className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl text-gray-600">×</span>
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{selectedDept.title}</h2>
                <p className="text-base sm:text-lg font-semibold text-gray-700 mb-4">Cpi management and Technology</p>
                <p className="text-gray-600 leading-relaxed mb-6">{selectedDept.description}</p>

                <div className="space-y-4 bg-gray-50 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Course Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Duration:</p>
                      <p className="text-gray-600">4 Years</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Degree:</p>
                      <p className="text-gray-600">Diploma in Engineering</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Admission:</p>
                      <p className="text-gray-600">Open Now</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Seats Available:</p>
                      <p className="text-gray-600">50 Students</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
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

export default TechnologyCards;
