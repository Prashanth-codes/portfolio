import React from 'react'
import Me from '../assets/me1.jpg'
const Hero = () => {
  return (
    <div id='home' className='bg-black text-white text-center py-16'>
      <img src={Me} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Prashanth Nelluri</span>
        ,Full-Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300 px-4 md:px-32'>
        I am proficient in building advanced and responsive web applications.
      </p>
      <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'><a href="https://www.linkedin.com/in/prashanth-nelluri-bb2b3827b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bn%2FeG6eNrRrqQpCy6ZMCkNQ%3D%3D" target="_blank">Contact with me</a></button>
        <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'><a href="https://drive.google.com/file/d/1PCcGznfWQA1D1VnbiYMwvzvNqevdBgP2/view?usp=sharing" target="_blank">Resume</a></button>
      </div>
    </div>
  )
}

export default Hero
