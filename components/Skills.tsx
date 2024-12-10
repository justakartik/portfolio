'use client';

import { useState } from "react";
import { FaJsSquare, FaDocker, FaGitAlt } from 'react-icons/fa'; // JS, Docker, Git
import { SiTypescript, SiHtml5, SiCss3, SiMongodb, SiSqlite, SiReact, SiTailwindcss, SiPython } from 'react-icons/si'; // TypeScript, HTML, CSS, MongoDB, SQL
import { RiNextjsFill, RiNodejsLine } from "react-icons/ri";


export default function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "Nodejs", icon: <RiNodejsLine className="text-green-500 text-3xl" /> },
        { name: "Python", icon: <SiPython className="text-yellow-500 text-3xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl" /> },
        { name: "HTML", icon: <SiHtml5 className="text-orange-600 text-3xl" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-3xl" /> },
        { name: "ReactJs", icon: <SiReact  className="text-blue-600 text-3xl" /> },
        { name: "NextJs", icon: <RiNextjsFill  className="text-black-300 text-3xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss  className="text-blue-600 text-3xl" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-600 text-3xl" /> },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", icon: <FaDocker className="text-cyan-500 text-3xl" /> },
        //{ name: "AWS", icon: <FaAws className="text-yellow-500 text-3xl" /> },
        { name: "Git", icon: <FaGitAlt className="text-red-600 text-3xl" /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
        { name: "SQL", icon: <SiSqlite className="text-blue-500 text-3xl" /> },
            ],
    },
  ];

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);

  const handleCategorySwitch = (index) => {
    if (index === activeCategoryIndex) return;
    setIsSwitching(true);
    setTimeout(() => {
      setActiveCategoryIndex(index);
      setIsSwitching(false);
    }, 300); // Animation duration
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>

        <div
          className={`flex justify-center space-x-6 mb-12 transition-opacity duration-300 ${isSwitching ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategorySwitch(index)}
              className={`px-4 py-2 rounded-full text-white font-semibold transition-all ${
                activeCategoryIndex === index
                  ? "bg-blue-600"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {category.icon} {category.title}
            </button>
          ))}
        </div>

        {/* Display skills with animation */}
        <div
          className={`transition-opacity duration-300 transform ${
            isSwitching ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {categories[activeCategoryIndex].skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-gray-800 rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
