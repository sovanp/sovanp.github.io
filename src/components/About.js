import React from "react"

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-[#ccd6f6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-[#8892b0]">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Sovan. Nice to meet you! Feel free to look around!</p>
          </div>
          <div>
            <p>
              I love technology. The colossal amount of complexity, intricacy
              and profundity it adds to human life fascinates me. From leading
              and driving personal projects in robotics, to learning programming
              languages, and researching new algorithms, I have always been
              passionate about technology as a tool to improve human life.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
