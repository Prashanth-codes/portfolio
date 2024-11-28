import React from "react";
import Me from "../assets/me2.jpg";


const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={Me}
            alt="Profile Picture"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 about">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold">Front-end Development</h4>
                <p className="text-lg text-gray-300">
                  Experienced in creating visually appealing and responsive user
                  interfaces using React.js, HTML, CSS, and JavaScript.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Back-end Development</h4>
                <p className="text-lg text-gray-300">
                  Proficient in building robust and scalable APIs and server-side
                  applications using Node.js, Express.js, and RESTful principles.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Database Management</h4>
                <p className="text-lg text-gray-300">
                  Skilled in working with MongoDB to design and optimize database
                  schemas for high-performance applications.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Programming Languages</h4>
                <p className="text-lg text-gray-300">
                  Well-versed in Python for scripting and problem-solving and Java
                  for software development and algorithm design.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Version Control</h4>
                <p className="text-lg text-gray-300">
                  Comfortable with Git for managing and collaborating on codebases
                  efficiently.
                </p>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                >
                  2+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                >
                  30+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-green-400 to-blue-500"
                >
                  3
                </h3>
                <p>Hackathons Winner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
