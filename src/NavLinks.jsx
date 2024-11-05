import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <li className="hover:font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:font-semibold">
        <Link to="/about">About us</Link>
      </li>
      <li className="hover:font-semibold">
        <Link to="/services">Services</Link>
      </li>
      <li className="hover:font-semibold">
        <Link to="/pricing">Pricing</Link>
      </li>
      <li className="hover:font-semibold">
        <Link to="/team">Team</Link>
      </li>
      <li className="hover:font-semibold">
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">
          <button className="opacity-95 hover:opacity-100 bg-[#2fd6ff] p-2 px-8 ml-8 rounded-full">
            Contact
          </button>
        </Link>{" "}
      </li>
    </>
  );
};

export default NavLinks;
