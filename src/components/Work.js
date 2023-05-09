import React from "react"
import Slack from "../assets/slack-bot.png"
import Editor from "../assets/text-editor.png"

const Work = () => {
  return (
    <div
      name="work"
      className="w-full min-h-screen bg-[#0a192f] text-[#ccd6f6] py-8"
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center">
        <p className="text-4xl font-bold mb-8">
          <span className="text-[#64ffda]">04.</span> Some Things I've Built
        </p>
        {/* Project Item Start */}
        <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-16">
          <div className="w-full sm:w-3/5 mb-4 sm:mb-0">
            <img
              src={Slack}
              alt=""
              className="rounded-md shadow w-full h-auto"
            ></img>
          </div>
          <div className="w-full sm:w-2/5 sm:pl-8">
            <div className="text-right mb-4">
              <p className="text-[#64ffda] text-xl">Featured Project</p>
              <h4 className="text-[#ccd6f6] text-3xl font-bold">
                Slack Age Bot
              </h4>
            </div>
            <div className="bg-[#112240] rounded-md p-6 shadow-xl mb-6">
              <p className="text-[#8892b0] leading-relaxed">
                A simple Slack Bot that calculates age, given the year of birth
                (dob).
              </p>
            </div>
            <div className="text-right">
              <div className="flex justify-end mb-6">
                <span className="text-[#8892b0] mr-4">Go</span>
                <span className="text-[#8892b0] mr-4">Slack API</span>
              </div>
              <div className="flex justify-end">
                <a
                  href="https://github.com/sovanp/slack-age-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8892b0] hover:text-[#64ffda] mr-2 h-6 w-6"
                >
                  {/* GitHub icon */}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project Item End */}
        {/* Project Item Start */}
        <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-16">
          <div className="w-full sm:w-3/5 order-last sm:order-first mb-4 sm:mb-0 sm:pl-8">
            <div className="text-left mb-4">
              <p className="text-[#64ffda] text-xl">Featured Project</p>
              <h4 className="text-[#ccd6f6] text-3xl font-bold">Text Editor</h4>
            </div>
            <div className="bg-[#112240] rounded-md p-6 shadow-xl mb-6">
              <p className="text-[#8892b0] leading-relaxed">
                Text Editor is a plain text editor using the C/C++ ncurses
                library to create a light-weight text editor for simple usage.
              </p>
            </div>
            <div className="text-left">
              <div className="flex justify-start mb-6">
                <span className="text-[#8892b0] mr-4">C++</span>
              </div>
              <div className="flex justify-start">
                <a
                  href="https://github.com/sovanp/text-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8892b0] hover:text-[#64ffda] h-6 w-6"
                >
                  {/* GitHub icon */}
                </a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-2/5 order-first sm:order-last">
            <img
              src={Editor}
              alt=""
              className="rounded-md shadow w-full h-auto"
            ></img>
          </div>
        </div>
        {/* Project Item End */}
      </div>
    </div>
  )
}
export default Work
