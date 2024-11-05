import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo (3).png";
import OverlayNav from "./OverlayNav";
import NavLinks from "./NavLinks";

import { useLocation } from "react-router-dom";

const Header = () => {
  // STICKY NAVBAR

  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const nav = navRef.current;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Change '100' based on where you want it to stick
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]); // Re-run effect on route change

  return (
    <>
      <div
        ref={navRef}
        className="nav flex justify-between items-center py-10 gap-24 items  w-full"
      >
        <div className="w-[80%] flex justify-between items-center mx-auto">
          <Link to="/">
            {" "}
            <div className="flex gap-1 items-center">
              <img src={logo} alt="" className="w-10 sm:w-12" />
              <h1 className="text-[19px] sm:text-[22px] font-bold audiowide-regular">
                CYBERPRO
              </h1>
            </div>{" "}
          </Link>
          <ul className="hidden lgSm:flex gap-10 text-lg items-center ubuntu-medium">
            <NavLinks />
          </ul>
          <div className="flex lgSm:hidden ubuntu-medium">
            <OverlayNav />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
