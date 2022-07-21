import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"

export const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#64ffda]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Sovan Patnayak
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a Software Engineer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I aspire to impart a wave of positive change across the world, one
          line at a time. Currently, I'm a full-stack Software Engineer at
          PlaceHolder Inc. and studying Computer Engineering at the University
          of Waterloo.
        </p>
        <div>
          <button className="text-[#ccd6f6] group border-2 px-6 py-3 my-2 flex items-center hover:text-[#64ffda] hover:border-[#64ffda]">
            Check out my work!
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
