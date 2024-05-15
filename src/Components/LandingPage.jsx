import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import Button from "./Button";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-40 px-20">
        {["We create", "Top Landing", "Websites"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" mr-[1vw] w-[8vw] rounded-md h-[5.5vw] -top-[0.3vw] bg-green-500 relative "
                  ></motion.div>
                )}
                <h1 className=" uppercase text-[8vw] leading-[6.5vw] text-white font-secondary tracking-tighter font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" border-t-2 border-zinc-700 mt-40 flex justify-between items-center py-5 px-20">
        {["For private company", "For small company"].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <Button text="Contact Us" />
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full">
            <span className=" rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
