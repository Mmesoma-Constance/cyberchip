import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo (3).png";
import OverlayNav from "./OverlayNav";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <>
      <div className="flex justify-between  items-center py-10 gap-24 items w-[80%]">
        <Link to="/">
          {" "}
          <div className="flex gap-1 items-center">
            <img src={logo} alt="" className="w-12" />
            <h1 className="text-[22px] font-bold audiowide-regular">
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
    </>
  );
};

export default Header;
