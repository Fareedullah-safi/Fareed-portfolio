import React from 'react';

const About = () => {
    return (
        <section
            id="About"
            className="bg-[#0a1c28] min-h-screen justify-center flex items-center px-6 md:px-10 lg:px-20 py-10"
        >
            <div className="max-w-8xl">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold flex gap-2 justify-center text-center">
                    About <span className="text-cyan-500">Me</span>
                </h1>

                {/* Subheading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">
                    Full Stack Developer
                </h2>

                {/* Paragraph */}
                <p className="-mt-4 text-base w-full text-lg leading-relaxed text-justify">
                    I am a skilled web developer with over 1 year of experience. My passion lies in creating
                    captivating website designs and implementing them through frontend development. I take
                    pride in staying up-to-date with current design trends and leveraging my creativity to
                    produce visually appealing and user-friendly websites.
                    Throughout my career, I have developed a deep understanding of user experience (UX) and
                    user interface (UI) principles. By putting myself in the shoes of the end-users, I strive
                    to create intuitive and seamless browsing experiences.
                    I believe that a well-designed website should not only look visually appealing but also
                    provide a smooth and enjoyable interaction for visitors.
                    When starting a new project, I thoroughly research and analyze the target audience and
                    the client's specific requirements. This enables me to tailor my designs to meet their
                    expectations and deliver a unique online presence that aligns with their brand identity.
                </p>
            </div>
        </section>
    );
};

export default About;
