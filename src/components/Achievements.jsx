import React from 'react'
import ace from '../assets/ace.jpg';
import hashit from '../assets/hashit.jpg'
import uxplosion from '../assets/uxplosion.jpg';

const events = [
    {
        id: 1,
        name: "Hackathon Skill Tyro",
        technologies: "Full stack",
        description: "A project based on the event management system",
        image: ace,
    },
    {
        id: 2,
        name: "Hash it out hackathon",
        technologies: "Full stack",
        description: "Build an interactive platform for real-time student collaboration",
        image: hashit,
    },
    {
        id: 3,
        name: "Uxplosion hackathon",
        technologies: "Figma",
        description: "A web design for social media platform for the developers",
        image: uxplosion,
    }
]



const Achievements = () => {
  return (
    <div id='achievements' className='bg-black text-white py-20'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Achievements</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                events.map((e)=>(
                    <div key={e.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <img src={e.image} alt={e.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
                        <h3 className='text-2xl font-bold mb-2'>{e.name}</h3>
                        <p className='text-gray-400 mb-4'>{e.technologies}</p>
                        <p>{e.description}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Achievements
