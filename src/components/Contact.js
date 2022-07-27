import React from "react"

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/9b7f774f-97e9-4f2a-9e03-18b75a43147d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold text-[#ccd6f6]">
            <span class="text-[#64ffda]">05.</span> Contact
          </p>
          <p className="text-[#8892b0] py-4">
            Submit the form below or shoot me an email - sovanpatnayak@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-[#ccd6f6] border-2 rounded-md hover:bg-[#64ffda] hover:border-[#64ffda] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  )
}

export default Contact
