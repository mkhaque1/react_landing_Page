import { motion } from "framer-motion";
import React from "react";
import Button from "./Button";

function About() {
  return (
    <div className="w-full p-28 bg-zinc-900 text-white rounded-tl-3xl rounded-tr-3xl">
      <h2 className="xl:text-[4vw] lg:text-[3vw] sm:text-[2vw] font-primary xl:leading-[4vw] lg:leading-[4vw] sm:leading-3 ">
        Pyonet, a dynamic and innovative online freelance digital agency, stands
        at the forefront of transforming ideas into digital masterpieces.
      </h2>
      <div className=" w-full flex gap-5 mt-32 border-t-[1px] border-sky-300">
        <div className="w-1/2 mt-10">
          <h2 className=" text-7xl font-primary font-semibold tracking-tighter capitalize mb-10">
            Our approach :
          </h2>
          <Button text="Read More" />
        </div>
        <div className="w-1/2 h-[30vw] mt-10 rounded-3xl bg-slate-700">
          <img
            className="w-full h-full rounded-xl p-20"
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
