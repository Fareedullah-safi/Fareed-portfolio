import React from 'react';
import { LayoutDashboard, Code, Smartphone } from 'lucide-react';

const services = [
    {
        id: 1,
        title: 'Frontend Development',
        Icon: LayoutDashboard,
        description:
            'Building responsive, user-friendly interfaces with React, Tailwind CSS, and Next.js.',
    },
    {
        id: 2,
        title: 'Backend & APIs',
        Icon: Code,
        description:
            'Developing scalable RESTful and GraphQL APIs using Node.js, Express, MongoDB, and Next.js server functions.',
    },
    {
        id: 3,
        title: 'Full Stack Solutions',
        Icon: Smartphone,
        description:
            'Delivering end-to-end web apps—from UI/UX to DevOps—deployed with Vercel, Docker, or cloud services.',
    },
];

export default function Services() {
    return (
        <main className="bg-[#0a1c28] w-full min-h-screen py-16">
            <div className="text-center mb-12">
                <h1 className="text-gray-300 text-5xl font-bold sm:text-3xl md:text-5xl lg:text-6xl">
                    My <span className="text-cyan-500">Services</span>
                </h1>
            </div>

            <section className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {services.map(({ id, title, Icon, description }) => (
                    <article
                        key={id}
                        className="bg-[#0c2435] p-6 rounded-2xl shadow-lg shadow-cyan-500/20 flex flex-col items-start"
                    >
                        <Icon className="text-cyan-500 w-10 h-10 mb-4" />
                        <h2 className="text-white text-xl font-semibold mb-3">{title}</h2>
                        <p className="text-gray-400 text-sm mb-6">{description}</p>
                        <button className="mt-auto bg-cyan-500 text-black px-4 py-2 rounded-full text-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                            Read More
                        </button>
                    </article>
                ))}
            </section>
        </main>
    );
}