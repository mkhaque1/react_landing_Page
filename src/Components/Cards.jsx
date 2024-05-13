import React from "react";
import Button from "./Button";
import { GiClick } from "react-icons/gi";

function Cards() {
  return (
    <div className="w-full h-[80vh] flex gap-10 px-20 bg-zinc-900 justify-start items-center">
      <div className="cardcontainer w-1/2 h-[30vw]">
        <div className=" card w-full relative backdrop-blur-lg h-full rounded-xl flex justify-center items-center">
          <img
            className="w-full absolute shadow-2xl shadow-indigo-950"
            src="https://img.freepik.com/free-vector/web-page-design-templates-collection-sport-car-industrial-technology-abstract-wireframe-from-dot-lines-design_587448-613.jpg?t=st=1715622472~exp=1715626072~hmac=2eced0c6c238b5f50d8ae1ce2ef158e936e6c4a82df3bce0fcc05089864a1e0d&w=1380"
            alt=""
          />
          <div className="absolute left-10 bottom-10 text-sm shadow-2xl shadow-indigo-800">
            <Button text="&copy; coming soon" />
          </div>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[30vw] flex gap-5 justify-center items-center">
        <div className=" card relative w-1/2 flex justify-center items-center h-full bg-zinc-800 rounded-xl">
          <img
            className="w-full h-full "
            src="/src/assets/brox-01.jpg"
            alt=""
          />
          <div className=" absolute bg-gradient-to-r from-pink-600 to-purple-600 blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt left-10 bottom-10 px-10 py-3 border-[1px] text-sm border-zinc-300 rounded-full">
            View Project
          </div>
        </div>
        <div className=" card relative w-1/2 flex justify-center items-center h-full bg-zinc-800 rounded-xl">
          <img
            className="w-full h-full "
            src="/src/assets/brox-03.jpg"
            alt=""
          />
          <button className=" absolute left-10 bottom-10 px-5 py-1 border-[1px] text-sm border-zinc-300 rounded-full">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
