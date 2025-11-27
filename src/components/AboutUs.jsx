import React from "react";

// ===================================================================
// AboutUs Component
// Displays the history and statistics of CPI Management and Technology
// ===================================================================
const AboutUs = () => {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        
        {/* ===================================================================
            About Us Title
            =================================================================== */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-3xl font-bold text-black border-b-4 border-black inline-block pb-1">
            About us
          </h2>
        </div>

        {/* ===================================================================
            Main Content Grid - Left Text, Right Image
            =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          
          {/* Left Column - History Text */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2">
                History of
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-blue-600 mb-2">
                CPI MANAGMENT AND
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-yellow-400">
                TECHNOLOGY
              </h1>
            </div>

            <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Printers in the 1500s scrambled the words from Cicero's "De Finibus 
                Bonorum et Malorum" after mixing the words in each sentence. The 
                familiar "lorem ipsum dolor sit amet" text emerged when 16th-century 
                printers adapted Cicero's original work, beginning with the phrase "dolor 
                sit amet consectetur."
              </p>
              <p>
                They abbreviated "dolorem" (meaning "pain") to "lorem," which carries no 
                meaning in Latin. "Ipsum" translates to "itself," and the text frequently 
                includes phrases such as "consectetur adipiscing elit" and "ut labore et 
                dolore." These Latin fragments, derived from Cicero's philosophical 
                treatise, were rearranged to create the standard dummy text that has 
                become a fundamental tool in design and typography across generations.
              </p>
              <p>
                The short answer is that lorem ipsum text doesn't actually "say" anything 
                meaningful. It's deliberately scrambled Latin that doesn't form coherent 
                sentences. While it comes from Cicero's "De Finibus Bonorum et 
                Malorum," the text has been modified so extensively that it's nonsensical.
              </p>
              <p>
                Why scrambled text? That's exactly the point. By using text that's 
                unreadable but maintains the general pattern of regular writing — 
                including normal word length, spacing, and punctuation — designers can 
                focus on the visual elements of a layout without the actual content 
                getting in the way. The pseudo-Latin appearance gives it a natural feel 
                while ensuring it won't distract from the design itself.
              </p>
            </div>
          </div>

          {/* Right Column - Image and Statistics */}
          <div className="w-full space-y-6">
            {/* Image */}
            <img 
              src="/images/About Image.jpg" 
              alt="CPI Management and Technology Students" 
              className="w-full rounded-lg shadow-lg object-cover"
            />

            {/* Statistics Section - Three Boxes Under Image */}
            <div className="grid grid-cols-2 gap-4">
          
          {/* Students Statistics Box */}
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <div className="text-4xl sm:text-5xl font-bold text-blue-500 mb-2">
              2000+
            </div>
            <div className="text-base sm:text-lg font-bold text-black uppercase">
              STUDENTS IN CAMPIUS
            </div>
          </div>

          {/* Departments Statistics Box */}
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <div className="text-4xl sm:text-5xl font-bold text-blue-500 mb-2">
              7
            </div>
            <div className="text-base sm:text-lg font-bold text-black uppercase">
              DEPARTMENT
            </div>
          </div>

          {/* Results Statistics Box - Spans 2 Columns */}
          <div className="bg-gray-100 rounded-lg p-6 text-center col-span-2">
            <div className="text-4xl sm:text-5xl font-bold text-blue-500 mb-2">
              100%
            </div>
            <div className="text-base sm:text-lg font-bold text-black uppercase">
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