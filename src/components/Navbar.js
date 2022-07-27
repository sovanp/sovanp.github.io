import React, { useState } from "react"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import Logo from "../assets/sovan-logo.png"
import { Link } from "react-scroll"
import Resume from "../assets/sp-resume-W22-v2.pdf"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-[#ccd6f6]">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex text-sm">
        <li className="hover:text-[#64ffda]">
          <Link to="home" smooth={true} duration={500}>
            <span className="text-[#64ffda]">01.</span> Home
          </Link>
        </li>
        <li className="hover:text-[#64ffda]">
          <Link to="about" smooth={true} duration={500}>
            <span className="text-[#64ffda]">02.</span> About
          </Link>
        </li>
        <li className="hover:text-[#64ffda]">
          <Link to="experience" smooth={true} duration={500}>
            <span className="text-[#64ffda]">03.</span> Experience
          </Link>
        </li>
        <li className="hover:text-[#64ffda]">
          <Link to="work" smooth={true} duration={500}>
            <span className="text-[#64ffda]">04.</span> Work
          </Link>
        </li>
        <li className="hover:text-[#64ffda]">
          <Link to="contact" smooth={true} duration={500}>
            <span className="text-[#64ffda]">05.</span> Contact
          </Link>
        </li>
      </ul>

      {/* Bar Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link to="home" smooth={true} duration={500}>
            <span className="text-[#64ffda]">01.</span> Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="about" smooth={true} duration={500}>
            <span className="text-[#64ffda]">02.</span> About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="experience" smooth={true} duration={500}>
            <span className="text-[#64ffda]">03.</span> Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="work" smooth={true} duration={500}>
            <span className="text-[#64ffda]">04.</span> Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="contact" smooth={true} duration={500}>
            <span className="text-[#64ffda]">05.</span> Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1] border-color rounded-t-md">
            <a
              className="flex justify-between items-center w-full text-[#ccd6f6]"
              href="https://www.linkedin.com/in/sovan-patnayak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
            <a
              className="flex justify-between items-center w-full text-[#ccd6f6]"
              href="https://github.com/sovanp"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-[#ccd6f6]"
              href="mailto: sovanpatnayak@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] border-color rounded-b-md">
            <a
              className="flex justify-between items-center w-full text-[#ccd6f6]"
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              download="sovan-patnayak-resume.pdf"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
