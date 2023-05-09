import React from "react"

const experiences = [
  {
    id: "placeholder",
    company: "Placeholder",
    position: "Software Engineer",
    period: "May - September 2022",
    website: "https://placeholder.co/",
    tasks: [
      "Designed, implemented and debugged core software components",
      "Authored and deployed unit tests and other automated software tests",
      "Collaborated with team members to gather requirements for new/existing features",
      "Participated in architecture, design and code reviews",
    ],
  },
  {
    id: "ea",
    company: "Electronic Arts",
    position: "Software Quality Engineer",
    period: "January - April 2022",
    website: "https://www.ea.com/",
    tasks: [
      "Developed and maintained game features for AAA titles",
      "Implemented game mechanics and systems using C++ and Unreal Engine",
      "Collaborated with artists, designers, and producers to create high-quality game experiences",
      "Optimized performance and resolved technical issues",
    ],
  },
  {
    id: "sunlife",
    company: "Sun Life",
    position: "Software Architect",
    period: "May - August 2021",
    website: "https://www.sunlife.com/",
    tasks: [
      "Developed and maintained web applications using JavaScript, React, and Node.js",
      "Implemented responsive designs for mobile and desktop devices",
      "Collaborated with cross-functional teams to gather requirements and create user-centric solutions",
      "Ensured code quality and best practices through code reviews and automated testing",
    ],
  },
  {
    id: "bmo1",
    company: "BMO Financial",
    position: "Software Technology Analyst",
    period: "January - April 2021",
    website: "https://www.bmo.com/",
    tasks: [
      "Developed and maintained internal tools and applications",
      "Implemented new features and bug fixes using Java and Spring Boot",
      "Collaborated with team members to ensure smooth and efficient development processes",
      "Participated in agile development practices, including daily stand-ups, sprint planning, and retrospectives",
    ],
  },
  {
    id: "bmo2",
    company: "BMO Financial",
    position: "IT Operations Analyst",
    period: "May - August 2020",
    website: "https://www.bmo.com/",
    tasks: [
      "Supported the development of web applications using HTML, CSS, and JavaScript",
      "Assisted in the migration of legacy applications to modern frameworks and libraries",
      "Collaborated with team members to troubleshoot and resolve technical issues",
      "Participated in code reviews and contributed to documentation efforts",
    ],
  },
]

const ExperienceItem = ({ experience }) => (
  <div>
    <header className="mb-6">
      <h3 className="text-xl text-[#ccd6f6] font-bold mb-1">
        {experience.position}
        <span className="text-[#64ffda] mx-3">@</span>
        <a
          href={experience.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#64ffda] hover:underline whitespace-nowrap"
        >
          {experience.company}
        </a>
      </h3>
      <p className="text-[#8892b0] mb-3 text-xs">{experience.period}</p>
    </header>
    <div>
      {experience.tasks.map((task, index) => (
        <p key={index} className="text-[#8892b0] leading-relaxed mb-3">
          {task}
        </p>
      ))}
    </div>
  </div>
)

const Experience = () => {
  const [currentExperience, setCurrentExperience] = React.useState(
    experiences[0].id
  )

  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-[#ccd6f6]"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full">
        <div className="w-full md:w-3/4 xl:w-2/3">
          <p className="text-4xl font-bold mb-8">
            <span className="text-[#64ffda]">03.</span> Where I've Worked
          </p>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/5 mb-4 sm:mb-0">
              <ul>
                {experiences.map((experience) => (
                  <li key={experience.id}>
                    <button
                      className={`px-4 py-3 border-b-4 sm:border-b-0 border-l-0 sm:border-l-2 border-[#8892b0] hover:bg-[#8892b0] hover:bg-opacity-25 hover:text-[#64ffda] focus:outline-none ${
                        currentExperience === experience.id
                          ? "font-semibold text-[#64ffda] border-[#64ffda]"
                          : "text-[#8892b0]"
                      }`}
                      onClick={() => setCurrentExperience(experience.id)}
                    >
                      {experience.company}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full sm:w-4/5">
              <div className="px-0 sm:px-6">
                {experiences.map((experience) =>
                  currentExperience === experience.id ? (
                    <ExperienceItem
                      key={experience.id}
                      experience={experience}
                    />
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
