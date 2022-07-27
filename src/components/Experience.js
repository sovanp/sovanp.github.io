import React from "react"

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-screen bg-[#0a192f] text-[#ccd6f6]"
    >
      {/* Page Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full">
        {/* Offset the Exerpience Container from Center */}
        <div className="w-full sm:w-2/3">
          <p className="text-4xl font-bold mb-8">
            <span class="text-[#64ffda]">03.</span> Where I've Worked
          </p>
          <div
            className="flex flex-wrap"
            x-data="{currentExperience: 'placeholder'}"
          >
            <div className="w-full sm:w-1/5 mb-4 sm:mb-0">
              <div className="flex flex-row sm:flex-col overflow-x-auto">
                <a
                  {...{
                    "x-on:click.prevent": "currentExperience = 'placeholder'",
                  }}
                  href="/"
                  className="px-4 py-3 border-b-4 sm:border-b-0 border-l-0 sm:border-l-2 border-[#8892b0] hover:bg-[#8892b0] hover:bg-opacity-25 hover:text-[#64ffda] text-[#8892b0]"
                >
                  PlaceHolder Inc.
                </a>
                <a
                  {...{ "x-on:click.prevent": "currentExperience = 'ea'" }}
                  href="/"
                  className="px-4 py-3 border-b-4 sm:border-b-0 border-l-0 sm:border-l-2 border-[#8892b0] hover:bg-[#8892b0] hover:bg-opacity-25 hover:text-[#64ffda] text-[#8892b0]"
                >
                  Electronic Arts (EA)
                </a>
                <a
                  {...{ "x-on:click.prevent": "currentExperience = 'sunlife'" }}
                  href="/"
                  className="px-4 py-3 border-b-4 sm:border-b-0 border-l-0 sm:border-l-2 border-[#8892b0] hover:bg-[#8892b0] hover:bg-opacity-25 hover:text-[#64ffda] text-[#8892b0]"
                >
                  Sun Life
                </a>
                <a
                  {...{ "x-on:click.prevent": "currentExperience = 'bmo1'" }}
                  href="/"
                  className="px-4 py-3 border-b-4 sm:border-b-0 border-l-0 sm:border-l-2 border-[#8892b0] hover:bg-[#8892b0] hover:bg-opacity-25 hover:text-[#64ffda] text-[#8892b0]"
                >
                  BMO Financial
                </a>
                <a
                  {...{ "x-on:click.prevent": "currentExperience = 'bmo2'" }}
                  href="/"
                  className="px-4 py-3 border-b-4 sm:border-b-0 border-l-0 sm:border-l-2 border-[#8892b0] hover:bg-[#8892b0] hover:bg-opacity-25 hover:text-[#64ffda] text-[#8892b0]"
                >
                  BMO Financial
                </a>
              </div>
            </div>
            <div className="w-full sm:w-4/5">
              <div className="px-0 sm:px-6">
                {/* Experience Item Start*/}
                <div x-show="currentExperience === 'placeholder'">
                  <header className="mb-6">
                    <h3 class="text-xl text-[#ccd6f6] font-bold mb-1">
                      Software Engineer
                      <span class="text-[#64ffda] mx-3">@</span>
                      <a
                        href="https://placeholder.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-[#64ffda] hover:underline"
                      >
                        PlaceHolder Inc.
                      </a>
                    </h3>
                    <p class="text-[#8892b0] mb-3 text-xs">
                      May - September 2022
                    </p>
                  </header>
                  <div>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Designed, implemented and debugged core software
                      components
                    </p>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Authored and deployed unit tests and other automated
                      software tests
                    </p>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Collaborated with team members to gather requirements for
                      new/existing features
                    </p>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Participated in architecture, design and code reviews
                    </p>
                  </div>
                </div>
                {/* Experience Item End*/}
                {/* Experience Item Start*/}
                <div x-show="currentExperience === 'ea' ">
                  <header className="mb-6">
                    <h3 class="text-xl text-[#ccd6f6] font-bold mb-1">
                      Software Quality Engineer
                      <span class="text-[#64ffda] mx-3">@</span>
                      <a
                        href="https://www.ea.com/en-ca"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-[#64ffda] hover:underline"
                      >
                        Electronic Arts (EA)
                      </a>
                    </h3>
                    <p class="text-[#8892b0] mb-3 text-xs">
                      September 2021 - April 2022
                    </p>
                  </header>
                  <div>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Deployed an automated “shelf building” process through a
                      Jenkins interface to simplify pre-integration testing and
                      reduce Perforce (P4) errors (merge conflicts, out-of-sync
                      builds, etc.) that impact testing and milestone delivery
                      timelines
                    </p>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Devised a Jenkins pipeline by setting up authentication,
                      authorization, Slack integration, and job/node
                      configuration
                    </p>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Configured a designated “build” machine for the automated
                      process by setting up an Ubuntu VM using Hyper-V and
                      installing all required dependencies such as Perforce
                      (P4), Java, Git, and Jenkins
                    </p>
                  </div>
                </div>
                {/* Experience Item End*/}
                {/* Experience Item Start*/}
                <div x-show="currentExperience === 'sunlife' ">
                  <header className="mb-6">
                    <h3 class="text-xl text-[#ccd6f6] font-bold mb-1">
                      Software Architect
                      <span class="text-[#64ffda] mx-3">@</span>
                      <a
                        href="https://www.sunlife.ca/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-[#64ffda] hover:underline"
                      >
                        Sun Life
                      </a>
                    </h3>
                    <p class="text-[#8892b0] mb-3 text-xs">
                      January - August 2021
                    </p>
                  </header>
                  <div>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Prototyped a CRUD Serverless API with AWS Lambda, API
                      Gateway, and DynamoDB from scratch with less than 0.1%
                      downtime to serve data to multiple internal applications
                    </p>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Oversaw the implementation of a custom ServiceNow instance
                      for multiple regions (Canada, US, Asia), impacting more
                      than 600 businesss users and stakeholders
                    </p>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Performed UAT/Regression testing for enhancements and
                      created Business Requirements and Technical Design
                      documents
                    </p>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Maintained and updated more than 1000+ data records in the
                      Alfabet platform (Enterprise Architecture Management
                      system) for audit purposes
                    </p>
                  </div>
                </div>
                {/* Experience Item End*/}
                {/* Experience Item Start*/}
                <div x-show="currentExperience === 'bmo1' ">
                  <header className="mb-6">
                    <h3 class="text-xl text-[#ccd6f6] font-bold mb-1">
                      Software Analyst
                      <span class="text-[#64ffda] mx-3">@</span>
                      <a
                        href="https://www.bmo.com/main/about-bmo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-[#64ffda] hover:underline"
                      >
                        BMO Financial
                      </a>
                    </h3>
                    <p class="text-[#8892b0] mb-3 text-xs">
                      January - April 2020
                    </p>
                  </header>
                  <div>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Managed internal front-end web applications and deployed
                      time-sensitive content in the Coupa platform using hybrid
                      Scum/Agile methodology
                    </p>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Revamped entire front-end UI for the internal Procurement
                      website, improving functionality, aesthetic appeal and
                      increasing site traffic by 10%
                    </p>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Pioneered new custom fields to ensure all pertinent
                      information was captured in requisitions and invoices in
                      the Coupa platform
                    </p>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Developed and implemented numerous intake forms to
                      streamline data aggregation methods
                    </p>
                  </div>
                </div>
                {/* Experience Item End*/}
                {/* Experience Item Start*/}
                <div x-show="currentExperience === 'bmo2' ">
                  <header className="mb-6">
                    <h3 class="text-xl text-[#ccd6f6] font-bold mb-1">
                      IT Operations Analyst
                      <span class="text-[#64ffda] mx-3">@</span>
                      <a
                        href="https://www.bmo.com/main/about-bmo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-[#64ffda] hover:underline"
                      >
                        BMO Financial
                      </a>
                    </h3>
                    <p class="text-[#8892b0] mb-3 text-xs">
                      January - April 2019
                    </p>
                  </header>
                  <div>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Developed 300+ post-validation “health check” scripts for
                      Windows applications in Python, pushing to Bitbucket, and
                      integrating with Ansible Tower, resulting in an effortless
                      experience by the end-user
                    </p>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Architected a scalable proof of concept script using
                      PowerShell, automating the migration of user-inputted data
                      from a CSV file to create a “health check” Ansible
                      package, reducing creation time by 80%
                    </p>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Built an “Operational Server Readiness” script in
                      PowerShell to scan multiple pre-production servers,
                      validate all critical configurations, and clearly
                      highlight errors, saving more than 2+ developer hours
                      daily
                    </p>
                    <p class="text-[#8892b0] leading-relaxed mb-3">
                      Pitched and presented potential implementation of several
                      automation frameworks to the business team and senior
                      executives, resulting in reduced tech debt by streamlining
                      report generation tools for data aggregation
                    </p>
                  </div>
                </div>
                {/* Experience Item End*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
