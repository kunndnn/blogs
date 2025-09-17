import { FaGithub, FaLinkedin, FaRocket, FaCode } from "react-icons/fa6";
import { info } from "../data/info";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-green-200 to-green-100 shadow-inner">
            <div className="flex items-center justify-between p-5">
                {/* Left side text */}
                <span className="text-sm text-gray-700">
                    © {new Date().getFullYear()} <span className="font-semibold">Blogs</span>. Made with <span className="text-red-500">❤️</span>
                </span>

                {/* Right side icons */}
                <div className="flex space-x-4">

                    <span
                        onClick={() => window.open(info.socials.github, "_blank")}
                        className="text-gray-700 hover:text-black transition transform hover:scale-110 cursor-pointer"
                        title="Github"
                    >
                        <FaGithub size={22} />
                    </span>

                    <span
                        onClick={() => window.open(info.socials.linkedin, "_blank")}
                        className="text-gray-700 hover:text-blue-700 transition transform hover:scale-110 cursor-pointer"
                        title="Linkedin"
                    >
                        <FaLinkedin size={22} />
                    </span>

                    <span
                        onClick={() => window.open(info.socials.portfolio, "_blank")}
                        className="text-gray-700 hover:text-orange-700 transition transform hover:scale-110 cursor-pointer"
                        title="Portfoio"
                    >
                        <FaRocket size={22} />
                    </span>
                    
                    <span
                        onClick={() => window.open(info.socials.code, "_blank")}
                        className="text-gray-700 hover:text-black transition transform hover:scale-110 cursor-pointer"
                        title="Source Code"
                    > 
                        <FaCode size={22} />
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
