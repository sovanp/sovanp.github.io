import React from "react"
import Profile from "../assets/sovan-profile.jpg"

const About = () => {
  const technologies = [
    "C++",
    "Go",
    "JavaScript",
    "Python",
    "Tailwind CSS",
    "SQL",
  ]

  const pastLinks = [
    {
      href: "https://uwaterloo.ca/",
      text: " University of Waterloo",
    },
    {
      href: "https://www.bmo.com/main/about-bmo/",
      text: "BMO Financial Group",
    },
    {
      href: "https://www.sunlife.ca/en/",
      text: "Sun Life",
    },
    {
      href: "https://www.ea.com/en-ca",
      text: "Electronic Arts (EA)",
    },
    {
      href: "https://placeholder.co/",
      text: "Placeholder",
    },
  ]

  const recentExperience = {
    href: "https://www.hatch.com/",
    text: "Hatch",
    role: "Software Engineer",
    description:
      "working on the Digital Products team to help build a Tailings Monitoring Application",
  }

  const renderPastLinks = () => {
    return pastLinks.slice(1).map((link, index) => (
      <React.Fragment key={link.href}>
        {index === pastLinks.length - 2 && "and "}
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#64ffda] font-medium no-underline hover:underline"
        >
          {link.text}
        </a>
        {index < pastLinks.length - 3 && ", "}
        {index === pastLinks.length - 3 && " "}
      </React.Fragment>
    ))
  }

  const renderTechnologies = () => {
    return technologies.map((tech) => (
      <p className="w-1/2 sm:w-2/5" key={tech}>
        <span className="text-[#64ffda] text-xs mr-3">&gt;</span>
        {tech}
      </p>
    ))
  }

  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-[#ccd6f6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-10">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold">
              <span className="text-[#64ffda]">02.</span> About Me
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-[#8892b0]">
          <div className="sm:text-left leading-relaxed">
            <p className="mb-3">
              Hi there! I'm Sovan, a technology enthusiast passionate about
              using technology to improve human life. I'm captivated by the
              complexity, intricacy, and profound impact it has on our everyday
              experiences.
            </p>
            <p className="mb-3">
              I'm a Computer Engineering student at the
              <a
                href={pastLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda] font-medium no-underline hover:underline"
              >
                {pastLinks[0].text}
              </a>
              . Over the past few years, I've had the privilege of working at{" "}
              {renderPastLinks()}. Most recently, I was a{" "}
              {recentExperience.role} at{" "}
              <a
                href={recentExperience.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda] font-medium no-underline hover:underline"
              >
                {recentExperience.text}
              </a>{" "}
              {recentExperience.description}.
            </p>

            <p className="mb-3">
              Here are a few technologies I've been working with recently:
            </p>
            <div className="flex flex-wrap">{renderTechnologies()}</div>
          </div>
          <div>
            <div className="w-4/6 flex justify-center ml-8">
              <div className="border-2 border-[#64ffda] rounded-md">
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
