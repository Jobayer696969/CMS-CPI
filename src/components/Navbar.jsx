import React from 'react'

const navbar = () => {
  return (
<div className="bg-[#18306E]">
         {/* Full-width background */}
      <div className="max-w-[1440px] mx-auto px-4"> {/* Centered container */}
        
        <div className="navbar text-white shadow-sm rounded-xl">
          {/* Left */}
          <div className="navbar-start">
            <div className="dropdown">
              <button 
                tabIndex={0} 
                className="btn btn-ghost lg:hidden"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 6h16M4 12h8m-8 6h16" 
                  />
                </svg>
              </button>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                  <li><a>Home</a></li>
              <li><a>Technology</a></li>
              <li><a>Gallery</a></li>
              <li><a>Achievement</a></li>
              <li><a>About us</a></li>
              </ul>
            </div>

            <img className='object-contain w-[105px] h-[57.96px]' src="/public/images/logo.png" alt="Cpi logo" />
          </div>

          {/* Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-8">
              <li className=' rounded-xl hover:bg-[#FDDB24] hover:text-[#18306E] text-base font-bold'><a>Home</a></li>
              <li className='rounded-xl hover:bg-[#FDDB24] hover:text-[#18306E] text-base font-bold'><a>Technology</a></li>
              <li className='rounded-xl hover:bg-[#FDDB24] hover:text-[#18306E]  text-base font-bold'><a>Gallery</a></li>
              <li className='rounded-xl hover:bg-[#FDDB24] hover:text-[#18306E] text-base font-bold'><a>Achievement</a></li>
              <li className='rounded-xl hover:bg-[#FDDB24] hover:text-[#18306E] text-base font-bold'><a>About us</a></li>
            </ul>
          </div>

          {/* Right */}
          <div className="navbar-end">
            <a className="btn bg-transparent text-white rounded-xl hover:bg-[#FDDB24] font-bold text-base ">Login</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default navbar