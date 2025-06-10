import React from 'react';

const About = () => {
    return (
        <section className="bg-[#0a1c28] w-full flex flex-col lg:flex-row justify-center items-center p-6 gap-6 text-white">
            <div>
                <img
                    src="/images/fareed.png"
                    alt="Fareed"
                    className="w-60 h-60 object-cover mt-4 rounded-full md:hidden"
                />
            </div>

            <div className="w-full md:-mt-12">
                <h1 className="text-5xl font-bold mb-1 flex gap-1 justify-center lg:text-6xl">About
                    <p className='text-cyan-500'>Me</p></h1>
                <h2 className="text-3xl mb-2 font-semibold justify-center flex lg:text-4xl">Full Stack Developer</h2>
                <p className="leading-relaxed text-justify">
                    I am a skilled web developer with over 1 year of experience in the industry.
                    My passion lies in creating captivating website designs and implementing them
                    through frontend development. I take pride in staying up-to-date with current
                    design trends and leveraging my creativity to produce visually appealing and
                    user-friendly websites.
                    Throughout my career, I have developed a deep understanding of user experience
                    (UX) and user interface (UI) principles. By putting myself in the shoes of the
                    end-users, I strive to create intuitive and seamless browsing experiences.
                    I believe that a well-designed website should not only look visually appealing
                    but also provide a smooth and enjoyable interaction for visitors.
                    When starting a new project, I thoroughly research and analyze the target audience
                    and the client's specific requirements. This enables me to tailor my designs to
                    meet their expectations and deliver a unique online presence that aligns with their
                    brand identity.
                </p>
            </div>
        </section>
    );
};

export default About;
