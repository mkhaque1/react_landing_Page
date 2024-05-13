import React from "react";

function Footer() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".3"
      className="w-full h-screen bg-zinc-900 flex gap-5"
    >
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className=" uppercase text-[5vw] font-secondary font-semibold text-white px-20 pt-20 leading-none">
            Pyonet <br />
            your Choice
          </h1>
        </div>
        <h3 className=" text-3xl font-primary font-bold uppercase p-20">
          Pyonet
        </h3>
      </div>
      <div className="w-1/2">
        <h1 className=" uppercase text-[5vw] font-secondary font-semibold text-white px-20 pt-20 leading-none">
          presentation
        </h1>
        <div className="details p-20">
          <a
            className=" text-md block font-[Neue_Montreal] font-light"
            href="#"
          >
            Linkedin
          </a>
          <a
            className=" text-md  block font-[Neue_Montreal] font-light"
            href="#"
          >
            Instagram
          </a>
          <a
            className=" text-md block font-[Neue_Montreal] font-light"
            href="#"
          >
            Facebook
          </a>
        </div>
        <div className="details  p-20">
          <a
            className=" text-md block font-[Neue_Montreal] font-light"
            href="#"
          >
            Home
          </a>
          <a
            className=" text-md block font-[Neue_Montreal] font-light"
            href="#"
          >
            About
          </a>
          <a
            className=" text-md block font-[Neue_Montreal] font-light"
            href="#"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
