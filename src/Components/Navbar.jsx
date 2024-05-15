import React from "react";
import logo1 from "../assets/logo.png";

function Navbar() {
  return (
    <div className=" fixed w-full z-[999] backdrop-blur-lg px-20 py-5 font-primary flex justify-between">
      <div className="logo">
        <a href="#">
          <img className=" w-10" src={logo1} alt="logo" />
        </a>
      </div>
      <div className="links flex gap-10">
        {["Services", "Our Work", "About Us", "Projects", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              className={` text-sm capitalize font-light ${
                index === 4 && " ml-4"
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
