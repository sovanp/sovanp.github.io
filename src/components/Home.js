import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"

export const Home = () => {
  const companyName = "Hatch"
  const companyUrl = "https://hatch.co/"

  return (
    <div
      name="home"
      className="w-full min-h-screen bg-[#0a192f] flex items-center"
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center w-full">
        <p className="text-[#64ffda] py-3 text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Sovan Patnayak.
        </h1>
        <h2 className="text-4xl sm:text-6xl py-3 font-bold text-[#8892b0]">
          I'm a Software Engineer.
        </h2>
        <p className="text-[#8892b0] py-3 max-w-[700px] text-sm leading-relaxed">
          I aspire to impart a wave of positive change across the world, one
          line at a time. Most recently, I was a Software Engineer at{" "}
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ffda] font-medium no-underline hover:underline"
          >
            {companyName}
          </a>{" "}
          and a Computer Engineering student at the{" "}
          <a
            href="https://uwaterloo.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ffda] font-medium no-underline hover:underline"
          >
            University of Waterloo
          </a>
          .
        </p>
        <div className="py-3">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-[#ccd6f6] group border-2 px-6 rounded-md py-3 my-2 flex items-center hover:text-[#64ffda] hover:border-[#64ffda] transition-all">
              Check out my work!
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
