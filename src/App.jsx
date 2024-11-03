import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Pricing from "./Pricing";
import Team from "./Team";
import Contact from "./Contact";
import Blog from "./Blog";
import Footer from "./Footer";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Animation only happens once
    });
  }, []);
  return (
    <Router>
      <div className="bg-gradient-to-br from-[#00a1a1] to-[#00004d] text-white min-h-screen ubuntu-regular">
        <div className="overflow-hidden flex flex-col justify-center items-center mx-auto">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/team" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
{
  /* from-[#00b3b3] to-[#142b3f] */
}
