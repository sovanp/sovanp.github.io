import React from "react"
import Profile from "../assets/sovan-profile.jpg"

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-[#ccd6f6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-10">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold">
              <span class="text-[#64ffda]">02.</span> About Me
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-[#8892b0]">
          <div className="sm:text-left leading-relaxed">
            <p className="mb-3">
              Hello! My name is Sovan and I love technology. The colossal amount
              of complexity, intricacy and profundity it adds to human life
              fascinates me. I have always been passionate about technology as a
              tool to improve human life.
            </p>
            <p className="mb-3">
              I'm a Computer Engineering student at the{" "}
              <a
                href="https://uwaterloo.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda] font-medium no-underline hover:underline"
              >
                University of Waterloo
              </a>
              . Over the past few years, I've had the privilege of working at{" "}
              <a
                href="https://www.bmo.com/main/about-bmo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda] font-medium no-underline hover:underline"
              >
                BMO Financial Group
              </a>
              ,{" "}
              <a
                href="https://www.sunlife.ca/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda] font-medium no-underline hover:underline"
              >
                Sun Life
              </a>
              , and{" "}
              <a
                href="https://www.ea.com/en-ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda] font-medium no-underline hover:underline"
              >
                Electronic Arts (EA)
              </a>
              . Currently, I'm a full-stack Software Engineer at{" "}
              <a
                href="https://placeholder.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda] font-medium no-underline hover:underline"
              >
                PlaceHolder Inc.
              </a>{" "}
              working on building and designing accessible microservices.
            </p>
            <p className="mb-3">
              Here are a few technologies I've been working with recently:
            </p>
            <div className="flex flex-wrap">
              <p className="w-1/2 sm:w-2/5">
                <span className="text-[#64ffda] text-xs mr-3">&gt;</span>
                C++
              </p>
              <p className="w-1/2 sm:w-2/5">
                <span className="text-[#64ffda] text-xs mr-3">&gt;</span>
                Go
              </p>
              <p className="w-1/2 sm:w-2/5">
                <span className="text-[#64ffda] text-xs mr-3">&gt;</span>
                JavaScript
              </p>
              <p className="w-1/2 sm:w-2/5">
                <span className="text-[#64ffda] text-xs mr-3">&gt;</span>
                Python
              </p>
              <p class="w-1/2 sm:w-2/5">
                <span className="text-[#64ffda] text-xs mr-3">&gt;</span>
                Tailwind CSS
              </p>
              <p class="w-1/2 sm:w-2/5">
                <span className="text-[#64ffda] text-xs mr-3">&gt;</span>
                SQL
              </p>
            </div>
          </div>
          <div>
            <div class="w-4/6 flex justify-center ml-8">
              <div class="border-2 border-[#64ffda] rounded-md">
                <img
                  src={Profile}
                  alt="Profile"
                  className="-mt-5 -ml-5 mb-5 mr-5 w-full h-auto rounded-md object-cover aspect-square hover:scale-105 transition duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
