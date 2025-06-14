"use client"
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

const technicalSkills = [
  { name: 'HTML', percent: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'Tailwind CSS', percent: 85, icon: <FaCss3Alt className="text-blue-400" /> },
  { name: 'JavaScript', percent: 80, icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', percent: 75, icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', percent: 82, icon: <SiNextdotjs className="text-white" /> },
];

const professionalSkills = [
  { name: 'Creativity', percent: 90 },
  { name: 'Communication', percent: 75 },
  { name: 'Problem Solving', percent: 75 },
  { name: 'Teamwork', percent: 85 },
];

const Skills = () => {
  return (
    <section id='Skills' className="min-h-screen w-full bg-[#0a192f] text-white pt-18 py-16">
      <div className="max-w-6xl px-1 mx-auto grid md:grid-cols-2 px-7 gap-15 lg:px-10.5">
        {/* Technical Skills */}
        <div>
          <h2 className="text-2xl font-bold mb-8 border-b-2 border-cyan-400 pb-2 inline-block">
            Technical Skills
          </h2>
          <div className="space-y-6">
            {technicalSkills.map(({ name, percent, icon }) => (
              <div key={name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="flex items-center gap-2 text-base font-medium">
                    {icon} {name}
                  </span>
                  <span className="text-sm font-medium">{percent}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-cyan-400 h-2 rounded-full"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h2 className="text-2xl font-bold mb-8 border-b-2 border-cyan-400 pb-2 inline-block">
            Professional Skills
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {professionalSkills.map(({ name, percent }) => (
              <div key={name} className="flex flex-col items-center">
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#1e293b"
                      strokeWidth="3"
                      strokeDasharray="100, 100"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="3"
                      strokeDasharray={`${percent}, 100`}
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-xl font-bold">{percent}%</span>
                  </div>
                </div>
                <span className="mt-2 font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
