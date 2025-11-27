import React from "react";

// ===================================================================
// Footer Component
// Displays footer with address, contact, quick links, and social media
// ===================================================================
const Footer = () => {
  return (
    <footer className="w-full">
      {/* ===================================================================
          Main Footer Section with Blue Background
          =================================================================== */}
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#5b7aa8' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* ===================================================================
                Address Section with Google Map
                =================================================================== */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white underline">
                Address
              </h3>
              <div className="text-white text-sm sm:text-base space-y-1">
                <p>Mirpur : # 06 ,Dhaka-1216,</p>
                <p>Road no: 01, Block#b</p>
                <p>Plot no# 17</p>
              </div>
              
              {/* Google Map Embed - Clickable to open in Google Maps */}
              <div className="w-full mt-4">
                <a 
                  href="https://maps.app.goo.gl/cD3zpymDuhGjNY2z8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.2944889524877!2d90.36271087595808!3d23.80882708660969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b64c95%3A0x2b3c5c7e4e5e5e5e!2sCPI%20Management%20and%20Technology!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '8px', pointerEvents: 'none' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CPI Management and Technology Location"
                  ></iframe>
                </a>
              </div>
            </div>

            {/* ===================================================================
                Contact Section
                =================================================================== */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white underline">
                Contact
              </h3>
              <div className="text-white text-sm sm:text-base space-y-2">
                <p>Number : 01711421695</p>
                <p>Hotline : 0001180269, 01200675</p>
                <p>Emergency Contact : 0363556354</p>
              </div>
            </div>

            {/* ===================================================================
                Quick Links Section
                =================================================================== */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white underline">
                Quick Links
              </h3>
              <div className="text-white text-sm sm:text-base space-y-2">
                <p className="hover:text-gray-200 cursor-pointer transition-colors">Admission</p>
                <p className="hover:text-gray-200 cursor-pointer transition-colors">Contact</p>
                <p className="hover:text-gray-200 cursor-pointer transition-colors">Technology</p>
              </div>
            </div>

            {/* ===================================================================
                Social Media Section
                =================================================================== */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white underline">
                Social media
              </h3>
              <div className="flex gap-6 items-center">
                {/* Facebook Icon */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <svg 
                    className="w-8 h-8 sm:w-10 sm:h-10" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Email Icon */}
                <a 
                  href="mailto:info@cpimanagement.edu" 
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <svg 
                    className="w-8 h-8 sm:w-10 sm:h-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7L13.03 12.7C12.71 12.89 12.36 13 12 13C11.64 13 11.29 12.89 10.97 12.7L2 7" />
                  </svg>
                </a>

                {/* Website/Globe Icon */}
                <a 
                  href="https://cpimanagement.edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <svg 
                    className="w-8 h-8 sm:w-10 sm:h-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================
          Copyright Section with Dark Navy Background
          =================================================================== */}
      <div className="w-full py-4 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1a2942' }}>
        <div className="max-w-[1440px] mx-auto">
          <p className="text-white text-center text-xs sm:text-sm">
            © 2025 CPI MANAGEMENT AND TECHNOLOGY. All rights reserved. Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;