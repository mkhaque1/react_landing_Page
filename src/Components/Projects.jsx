import { motion, useAnimation } from "framer-motion";
import React from "react";
import Button from "./Button";

function Projects() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: 0 });
  };

  const handleHoverEnd = (index) => {
    // Fix: Added index parameter
    cards[index].start({ y: "100%" }); // Fix: Changed end to start to trigger animation
  };

  return (
    <div className="w-full py-20 ">
      <div className=" w-full px-20 border-b-[1px] border-zinc-600 pb-10">
        <h1 className="text-7xl font-secondary font-thin">Features Projects</h1>
      </div>
      <div className="crads w-full flex gap-20 mt-10 px-20">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)} // Fix: Passed index 0 to handleHoverEnd
          className="cardcontainer relative w-1/2 h-[60vh]"
        >
          <h3 className=" absolute w-full text-zinc-200 overflow-hidden flex justify-center items-center left-full uppercase -translate-x-1/2 top-1/2 -translate-y-1/2 z-[99] leading-none  text-3xl font-semibold font-secondary font-light">
            {"Todo App".split("").map((item, index) => (
              <motion.span
                key={index} // Added key prop for optimization
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.06 }}
              >
                {item}
              </motion.span>
            ))}
          </h3>
          <div className="card w-full h-full rounded-xl  overflow-hidden">
            <img
              className="w-full  bg-cover hover:blur-sm transition duration-300"
              src="https://graphicsfamily.com/wp-content/uploads/edd/2022/11/Social-media-marketing-landing-page-mockup-1180x664.jpg"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)} // Fix: Passed index 0 to handleHoverEnd
          className="cardcontainer relative w-1/2 h-[60vh] "
        >
          <h3 className=" absolute w-full text-zinc-200 overflow-hidden flex justify-center items-center right-full uppercase translate-x-1/2 top-1/2 translate-y-1/2 z-[99] leading-none  text-3xl font-semibold font-secondary font-light">
            {"pyonet".split("").map((item, index) => (
              <motion.span
                key={index} // Added key prop for optimization
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.06 }}
              >
                {item}
              </motion.span>
            ))}
          </h3>
          <div className="card w-full rounded-xl  overflow-hidden">
            <img
              className="w-full  bg-cover hover:blur-sm transition duration-300"
              src="/src/assets/pyonet.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>
      <div className="crads w-full flex gap-20 mt-10 px-20">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)} // Fix: Passed index 0 to handleHoverEnd
          className="cardcontainer hover:cursor-pointer relative w-1/2 h-[60vh]"
        >
          <h3 className=" absolute w-full text-zinc-200 overflow-hidden flex justify-center items-center left-full uppercase -translate-x-1/2 top-1/2 -translate-y-1/2 z-[99] leading-none  text-3xl font-semibold font-secondary font-light">
            {"LMS".split("").map((item, index) => (
              <motion.span
                key={index} // Added key prop for optimization
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.06 }}
              >
                {item}
              </motion.span>
            ))}
          </h3>
          <div className="card w-full h-full rounded-xl  overflow-hidden">
            <img
              className="w-full  bg-cover hover:blur-sm transition duration-300"
              src="/src/assets/lms.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)} // Fix: Passed index 0 to handleHoverEnd
          className="cardcontainer relative w-1/2 h-[60vh] "
        >
          <h3 className=" absolute w-full text-zinc-200  overflow-hidden flex justify-center items-center right-full uppercase translate-x-1/2 top-1/2 translate-y-1/2 z-[99] leading-none  text-3xl font-semibold font-secondary font-light">
            {"Agency".split("").map((item, index) => (
              <motion.span
                key={index} // Added key prop for optimization
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.33, 1, 0.68, 1], delay: index * 0.06 }}
              >
                {item}
              </motion.span>
            ))}
          </h3>
          <div className="card w-full h-full rounded-xl  overflow-hidden">
            <img
              className="w-full  bg-cover hover:blur-sm transition duration-300"
              src="/src/assets/mnky.png"
              alt=""
            />
          </div>
        </motion.div>
      </div>
      <div className="w-full mt-20 flex justify-center text-center items-center">
        <div class="relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button class="relative px-7 font-[Neue_Montreal] py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <span class="flex items-center space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-pink-600 -rotate-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>

              <span class="pr-6 font-light text-gray-100">View More..</span>
            </span>
            <span class="pl-6 text-indigo-400 font-light group-hover:text-gray-100 transition duration-200">
              See what's new &rarr;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
