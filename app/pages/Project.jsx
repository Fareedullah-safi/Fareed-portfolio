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
    image: '/images/website-dev.png',
    description: 'Full-stack web development with latest technologies',
    link: '#', // Use '#' or a relevant default if no link is provided
  },
  {
    id: 3,
    title: 'Mobile App Development',
    image: '/images/mobile-app.png',
    description: 'Cross-platform mobile applications with responsive design',
    link: '#', // Use '#' or a relevant default if no link is provided
  },
];

const Project = () => {
  return (
    <section className="min-h-screen bg-[#0a192f] text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-16">
          Latest <span className="text-cyan-400">Project</span>
        </h1>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, image, description, link }) => (
            // Wrap the entire project card content with Link
            <Link
              key={id}
              href={link}
              target="_blank" // Opens link in a new tab for external links
              rel="noopener noreferrer" // Security best practice for target="_blank"
              className="bg-[#112240] rounded-lg overflow-hidden shadow-xl hover:shadow-cyan-400/20 transition-shadow duration-300 transform hover:-translate-y-2 block" // 'block' makes the whole card clickable
            >
              {/* Image container with relative positioning for Next.js Image */}
              <div className="relative h-50 w-full">
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 w-full h-full hover:scale-105"
                  priority={true} // optional: prioritize loading images above the fold
                />
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400">{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;