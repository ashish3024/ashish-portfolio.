import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="text-center text-4xl font-bold mb-4">Ashish Kumar</header>
      <p className="text-center text-lg">Pre-final Year CS Student | Software Developer | Problem Solver</p>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-2 text-gray-300">
          Passionate about software development with expertise in DSA (Java), full-stack development (React, Node.js, MongoDB), and problem-solving. Solved 500+ problems on LeetCode.
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold">Vidtube</h3>
            <p className="text-gray-300">A YouTube-like platform with Twitter-style features, built using Node.js, MongoDB, and React.</p>
          </div>
        </div>
      </section>
      
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/ashish-kumar-23255625b/" className="text-blue-500 text-2xl" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ashish3024" className="text-white text-2xl" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </section>
    </div>
  );
}