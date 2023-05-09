import React from "react"
import Slack from "../assets/slack-bot.png"
import Editor from "../assets/text-editor.png"
import SpotifyPlaylist from "../assets/spotify-playlist-generator.png"

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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
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
        {/* Project Item Start */}
        <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-16">
          <div className="w-full sm:w-3/5 mb-4 sm:mb-0">
            <img
              src={SpotifyPlaylist}
              alt=""
              className="rounded-md shadow w-full h-auto"
            ></img>
          </div>
          <div className="w-full sm:w-2/5 sm:pl-8">
            <div className="text-right mb-4">
              <p className="text-[#64ffda] text-xl">Featured Project</p>
              <h4 className="text-[#ccd6f6] text-3xl font-bold">
                Spotify Playlist Generator
              </h4>
            </div>
            <div className="bg-[#112240] rounded-md p-6 shadow-xl mb-6">
              <p className="text-[#8892b0] leading-relaxed">
                A simple Python application that leverages the Spotify Web API
                to generate custom playlists using seed tracks from a user's
                listening history.
              </p>
            </div>
            <div className="text-right">
              <div className="flex justify-end mb-6">
                <span className="text-[#8892b0] mr-4">Python</span>
              </div>
              <div className="flex justify-end">
                <a
                  href="https://github.com/sovanp/spotify-playlist-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8892b0] hover:text-[#64ffda] mr-2 h-6 w-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project Item End */}
      </div>
    </div>
  )
}
export default Work
