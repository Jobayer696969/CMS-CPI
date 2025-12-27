import React from "react";
import { Link } from "react-router-dom";

const TechnologyCard = ({ department }) => {
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
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col grow">
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900 truncate mb-1">
          {department.title}
        </h3>
        <p className="text-sm font-medium text-gray-700 mb-1">
          CPI Management and Technology
        </p>
        
        <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-4">
          {department.description}
        </p>

        {/* Link points to the unique path for each department */}
        <Link
          to={department.path}
          className="w-full bg-[#111D3A] hover:bg-yellow-500 text-white text-center font-semibold py-2 px-4 rounded-lg transition-all duration-500 text-sm uppercase tracking-wide border-2 border-black"
        >
          LEARN MORE
        </Link>
      </div>
    </div>
  );
};

const TechnologyCards = () => {
  // FULL COMPLETED DATA ARRAY
  const departments = [
    { 
      id: 1, 
      title: "Computer Science", 
      image: "/images/computercard.jpg", 
      path: "/technology/Computer", 
      description: "Focusing on software engineering, web development, and database management." 
    },
    { 
      id: 2, 
      title: "Civil Technology", 
      image: "/images/civilcard.jpg", 
      path: "/technology/civil", 
      description: "Covering structural design, surveying, and infrastructure development." 
    },
    { 
      id: 3, 
      title: "Electrical Technology", 
      image: "/images/electronicscard.jpg", 
      path: "/technology/electrical", 
      description: "Studying power systems, electrical circuits, and industrial wiring." 
    },
    { 
      id: 4, 
      title: "Automobile Technology", 
      image: "/images/automobilecard.jpg", 
      path: "/technology/automobile", 
      description: "Learning engine mechanics, vehicle dynamics, and modern automotive systems." 
    },
    { 
      id: 5, 
      title: "Mechatronics Technology", 
      image: "/images/mechatronicscard.jpg", 
      path: "/technology/mechatronics", 
      description: "The intersection of robotics, electronics, and mechanical automation." 
    },
    { 
      id: 6, 
      title: "Mechanical Technology", 
      image: "/images/mechanicalcard.jpg", 
      path: "/technology/mechanical", 
      description: "Understanding thermal engineering, machine design, and manufacturing." 
    },
    { 
      id: 7, 
      title: "Apparel Manufacturing", 
      image: "/images/apparelcard.jpg", 
      path: "/technology/apparel", 
      description: "Specializing in garment production, textile science, and fashion tech." 
    },
  ];

  return (
    <div id="technology-section" className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#111D3A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-yellow-400 text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-12">
          Technology
        </h2>

        {/* This layout automatically handles the 4 + 3 grid because of flex-wrap and width percentages */}
        <div className="flex flex-wrap justify-center gap-6">
          {departments.map((dept) => (
            <TechnologyCard key={dept.id} department={dept} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyCards;