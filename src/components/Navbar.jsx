import React from 'react'
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    // background-color: black; color: white;padding-left: 2rem;padding-right: 2rem;
    // @media (min-width: 768px) {
    //     .your-class {
    //         padding-left: 4rem;
    //         padding-right: 4rem;
    //     }
    // }
    
    // @media (min-width: 1024px) {
    //     .your-class {
    //         padding-left: 6rem;
    //         padding-right: 6rem;
    //     }
    // }
    
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50 h-14'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Prashanth</div>
        <div className='space-x-6'>
        <Link to="home" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
          About
        </Link>
        <Link to="services" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
          Services
        </Link>
        <Link to="projects" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
          Projects
        </Link>
        <Link to='achievements' smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>
          Achievements
        </Link>
        <Link to="contact" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
          Contact
        </Link>
        </div>
        {/* <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect me</button> */}
      </div>
    </nav>
  )
}

export default Navbar
