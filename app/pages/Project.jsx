import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Burj-Kalifa-Flats',
    image: '/images/burj-kalifa.jpg',
    description: 'Modern UI/UX design solutions with focus on user experience',
    link: 'https://burj-kalifa-flats.vercel.app/',
  },
  {
    id: 2,
    title: 'Website Development',
    image: '',
    description: 'Full-stack web development with latest technologies',
    link: '#',
    alert: 'coming soon',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    image: '',
    description: 'Cross-platform mobile applications with responsive design',
    link: '#',
    alert: 'coming soon',
  },
];

const Project = () => {
  return (
    <section id='Project' className="bg-[#0a192f] text-white pt-12 px-4 md:px-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl mb-8 md:text-5xl font-bold md:pb-6">
          Latest <span className="text-cyan-400">Project</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, image, description, link, alert }) => {
            const isComingSoon = !image;

            return (
              <div
                key={id}
                className="bg-[#112240] rounded-lg overflow-hidden shadow-xl hover:shadow-cyan-400/20 transition-shadow duration-300 transform hover:-translate-y-2"
              >
                {isComingSoon ? (
                  <div className="flex items-center justify-center h-64 bg-gray-800 text-center px-4">
                    <p className="text-gray-400 text-lg font-semibold">
                      {alert || 'Coming Soon'}
                    </p>
                  </div>
                ) : (
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                        priority
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{title}</h3>
                      <p className="text-gray-400">{description}</p>
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
