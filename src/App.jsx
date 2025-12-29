import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import TechnologyCards from "./components/TecnologyCarts";
import Achievement from "./components/Achivement";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/OtherPages/Gallery";
import ApparelCard from "./components/OtherPages/ApparelCard";
import AutomobileCard from "./components/OtherPages/AutomobileCard";
import ComputerCard from "./components/OtherPages/ComputerCard";
import CivilCard from "./components/OtherPages/CivilCard";
import MechanicalCard from "./components/OtherPages/MechanicalCard";
import MechatronicsCard from "./components/OtherPages/MechatronicsCard";
import ElectricalCard from "./components/OtherPages/ElectricalCard";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to allow the page to load before scrolling
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

const HomePage = () => (
  <>
    <HeroSection />
    <TechnologyCards />
    <Achievement />
    <AboutUs />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/technology/apparel" element={<ApparelCard />} />
            <Route path="/technology/Computer" element={<ComputerCard />} />
            <Route path="/technology/Electrical" element={<ElectricalCard />} />
            <Route path="/technology/Civil" element={<CivilCard />} />
            <Route path="/technology/Mechanical" element={<MechanicalCard />} />
            <Route path="/technology/Mechatronics" element={<MechatronicsCard />} />
            <Route path="/technology/Automobile" element={<AutomobileCard />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;