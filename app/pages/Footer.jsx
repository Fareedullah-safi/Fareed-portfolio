const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-gray-300 py-6 px-4 md:px-10 mt-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <p className="text-center md:text-left text-sm md:text-base">
                    © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Fareed</span>. All rights reserved.
                </p>
                <div className="mt-3 md:mt-0 flex gap-4 text-sm">
                    <a href="#Home" className="hover:text-cyan-400 transition-colors duration-200">Home</a>
                    <a href="#About" className="hover:text-cyan-400 transition-colors duration-200">About</a>
                    <a href="#Contact" className="hover:text-cyan-400 transition-colors duration-200">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
