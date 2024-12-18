import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);

    formData.append('access_key', '5f563b72-2cf5-470e-affc-3689c810e3af');

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      setResult('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form submitted successfully');
        event.target.reset();
      } else {
        console.log('Error', data);
        setResult(data.message);
      }
    } catch (error) {
      setResult('An error occurred. Please try again later.');
    }
  };

  return (
    <div id="contact" className="bg-black text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's talk
            </h3>
            <p>I'm open to discussing MERN stack projects or freelancing opportunities.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-orange-400 mr-2" />
              <a href="mailto:prashanthnelluri2005@gmail.com" className="hover:underline">
                prashanthnelluri2005@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>9014162309</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-red-400 mr-2" />
              <span>Hyderabad</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter your message"
                />
              </div>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">
                Send
              </button>
            </form>
            {result && (
              <p className="text-center text-green-400 mt-4">{result}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
