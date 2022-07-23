import React from "react"

import CPlusPlus from "../assets/c++.png"
import Go from "../assets/go.png"
import JavaScript from "../assets/javascript.png"
import Python from "../assets/python.png"
import ReactImg from "../assets/react.png"
import SQL from "../assets/sql.png"

const Skills = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-[#ccd6f6]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
            Experience
          </p>
          <p className="text-[#8892b0] py-4">
            Here are a few technologies I've been working with recently:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-1"
              src={CPlusPlus}
              alt="HTML icon"
            />
            <p className="text-[#ccd6f6] my-4">C++</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={Go} alt="HTML icon" />
            <p className="text-[#ccd6f6] my-4">Go</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-3"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="text-[#ccd6f6] my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="HTML icon" />
            <p className="text-[#ccd6f6] my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="text-[#ccd6f6] my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-7" src={SQL} alt="HTML icon" />
            <p className="text-[#ccd6f6] my-4">SQL</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
