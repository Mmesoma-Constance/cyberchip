import React, { useState } from "react";
import "./overlay.css";
import NavLinks from "./NavLinks";

function OverlayNav() {
  const [navWidth, setNavWidth] = useState("0%");

  const openNav = () => setNavWidth("70%");
  const closeNav = () => setNavWidth("0%");

  return (
    <div>
      <button onClick={openNav} className="flex items-center text-2xl">
        <i className="fa-solid fa-bars"></i>
      </button>

      <div
        id="myNav"
        style={{
          width: navWidth,
          height: "100%",
          position: "fixed",
          top: "0",
          right: "0",
          background:
            "linear-gradient(to top left, #006b6b, rgb(0, 0, 77, 0.9))",
          transition: "0.5s",
          zIndex: "1",
        }}
      >
        <button
          onClick={closeNav}
          style={{ fontSize: "36px" }}
          className="closeBtn"
        >
          &times;
        </button>
        <div style={{ color: "white", padding: "20px" }}>
          <ul className="flex flex-col mt-20 gap-10 text-lg items-center">
            <NavLinks />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OverlayNav;
