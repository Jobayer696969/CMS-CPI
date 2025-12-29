import { Link } from "react-router-dom";

const Navbar = () => {
  const closeDrawer = () => {
    const drawer = document.getElementById("nav-drawer");
    if (drawer) drawer.checked = false;
  };

  return (
    <div className="bg-[#18306E] sticky top-0 z-50 shadow-md">
      <div className="h-16 flex items-center gap-60 justify-between px-6 lg:px-12">
        <div className="drawer drawer-end w-full">
          <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex items-center justify-between w-full">
            
            <div className="flex items-center gap-70">
              <Link to="/"><img py-5 src="/images/Logo.png" alt="Logo" className="h-13 w-auto" /></Link>
              <Link to="/" className="hidden lg:block bg-[#FDDB24] text-[#18306E] font-bold px-6 py-2 rounded-xl">Home</Link>
            </div>

            <ul className="hidden lg:flex gap-4 font-bold">
              <li><a href="/#technology-section" className="text-[#FDDB24] px-4 py-2 hover:bg-[#FDDB24] hover:text-[#18306E] rounded-xl transition">Technology</a></li>
              <li><Link to="/gallery" className="text-[#FDDB24] px-4 py-2 hover:bg-[#FDDB24] hover:text-[#18306E] rounded-xl transition">Gallery</Link></li>
              <li><a href="/#achievement-section" className="text-[#FDDB24] px-4 py-2 hover:bg-[#FDDB24] hover:text-[#18306E] rounded-xl transition">Achievement</a></li>
              <li><a href="/#about-section" className="text-[#FDDB24] px-4 py-2 hover:bg-[#FDDB24] hover:text-[#18306E] rounded-xl transition">About Us</a></li>
            </ul>

            <div className="flex items-center gap-4">
              <button className="hidden lg:block bg-[#FDDB24] text-[#18306E] font-bold px-8 py-2 rounded-xl">Login</button>
              <label htmlFor="nav-drawer" className="lg:hidden bg-[#FDDB24] text-[#18306E] p-2 rounded-lg cursor-pointer">☰</label>
            </div>
          </div>

          <div className="drawer-side">
            <label htmlFor="nav-drawer" className="drawer-overlay"></label>
            <div className="w-72 min-h-full bg-[#18306E] text-white p-6 flex flex-col gap-6">
              <img src="/images/Logo.png" alt="Logo" className="h-10" />
              <Link to="/" onClick={closeDrawer}>Home</Link>
              <a href="/#technology-section" onClick={closeDrawer}>Technology</a>
              <Link to="/gallery" onClick={closeDrawer}>Gallery</Link>
              <a href="/#achievement-section" onClick={closeDrawer}>Achievement</a>
              <a href="/#about-section" onClick={closeDrawer}>About Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;