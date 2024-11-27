import React, { useState } from "react";
import { FaPhone, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "5f563b72-2cf5-470e-affc-3689c810e3af");

    const email = formData.get("email");

    if (!email) {
      setResult("Please fill in the field.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Successfully subscribed");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Prashanth</h3>
            <p className="text-gray-400">
              Full-Stack Developer based on MERN, specializing in web development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center" onSubmit={onSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
            {result && (
              <p
                className={`text-center mt-4 ${
                  result === "Successfully subscribed"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {result}
              </p>
            )}
          </div>
        </div>

        
        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Prashanth. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://x.com/Iam_Prashanth_1?t=gT_rNRtpXZVtwKLVtzQuZw&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              aria-label="Visit my Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/prashanth-nelluri-bb2b3827b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bn%2FeG6eNrRrqQpCy6ZMCkNQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              aria-label="Visit my LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Prashanth-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              aria-label="Visit my GitHub"
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a className="text-gray-400 hover:text-white" href="#privacy">
              Privacy
            </a>
            <a className="text-gray-400 hover:text-white" href="#terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
