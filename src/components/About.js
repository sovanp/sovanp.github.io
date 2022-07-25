import React from "react"
import Profile from "../assets/sovan-profile.jpg"

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-[#ccd6f6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold">
              <span class="text-[#64ffda]">01.</span> About Me
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
              Lorem ipsum dolor sit amet, elit. Assumenda aut commodi culpa
              debitis dolores ducimus, ea eos inventore.
            </p>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, elit. Assumenda aut commodi culpa
              debitis dolores ducimus, ea eos inventore.
            </p>
            <p className="mb-3">
              Lorem, Accusamus alias at{" "}
              <a href="/" className="text-[#64ffda] font-medium">
                deleniti deserunt dolores
              </a>{" "}
              dolorum eum incidunt minus molestias{" "}
              <a href="/" className="text-[#64ffda] font-medium">
                pariatur possimus praesentium quae
              </a>
              , quos soluta voluptas! Amet atque
            </p>
            <p className="mb-3">
              Here are a few technologies I've been working with recently:
            </p>
            <div className="flex flex-wrap">
              <p className="w-1/2 sm:w-2/5">
                <span className="font-black text-[#64ffda] text-xs mr-3">
                  &gt;
                </span>
                C++
              </p>
              <p className="w-1/2 sm:w-2/5">
                <span className="font-black text-[#64ffda] text-xs mr-3">
                  &gt;
                </span>
                Go
              </p>
              <p className="w-1/2 sm:w-2/5">
                <span className="font-black text-[#64ffda] text-xs mr-3">
                  &gt;
                </span>
                JavaScript
              </p>
              <p className="w-1/2 sm:w-2/5">
                <span className="font-black text-[#64ffda] text-xs mr-3">
                  &gt;
                </span>
                Python
              </p>
              <p class="w-1/2 sm:w-2/5">
                <span className="font-black text-[#64ffda] text-xs mr-3">
                  &gt;
                </span>
                Tailwind CSS
              </p>
              <p class="w-1/2 sm:w-2/5">
                <span className="font-black text-[#64ffda] text-xs mr-3">
                  &gt;
                </span>
                SQL
              </p>
            </div>
          </div>
          <div>
            <div class="w-3/4 flex justify-center">
              <div class="border-2 border-[#64ffda] rounded-md">
                <img
                  src={Profile}
                  alt="Profile"
                  className="-mt-6 -ml-6 mb-6 mr-6 w-full h-auto rounded-md object-cover aspect-square hover:scale-105 transition duration-200 ease-in-out"
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
