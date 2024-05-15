import { easeInOut, motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".01"
      className=" w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-green-500"
    >
      <div className="text  border-t-[1px] border-b-[1px]  overflow-hidden whitespace-nowrap border-zinc-200 flex">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 12 }}
          className="text-[13vw] relative font-bold leading-none tracking-tighter text-white uppercase  font-secondary"
        >
          WE ARE PYONET
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 12 }}
          className="text-[13vw] relative font-bold leading-none tracking-tighter text-white uppercase font-secondary "
        >
          All in One Here
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
