import { FaGithub, FaLinkedin, FaRocket, FaCode } from "react-icons/fa6";
import { info } from "../data/info";

const Footer = () => {
    return (
        <footer className="bg-background-base shadow-inner border-t border-brand-primary/10 flex items-center justify-between p-6">
            {/* Left side text */}
            <span className="text-sm text-text-muted">
                © {new Date().getFullYear()} <span className="font-semibold text-text-main">Blogs</span>. Made with <span className="text-brand-accent">❤️</span>
            </span>

            {/* Right side icons */}
            <div className="flex space-x-4">
                <span
                    onClick={() => window.open(info.socials.github, "_blank")}
                    className="text-text-muted hover:text-brand-primary transition transform hover:scale-110 cursor-pointer"
                    title="Github">
                    <FaGithub size={22} />
                </span>
                <span
                    onClick={() => window.open(info.socials.linkedin, "_blank")}
                    className="text-text-muted hover:text-brand-primary transition transform hover:scale-110 cursor-pointer"
                    title="Linkedin">
                    <FaLinkedin size={22} />
                </span>
                <span
                    onClick={() => window.open(info.socials.portfolio, "_blank")}
                    className="text-text-muted hover:text-brand-primary transition transform hover:scale-110 cursor-pointer"
                    title="Portfoio">
                    <FaRocket size={22} />
                </span>
                <span
                    onClick={() => window.open(info.socials.code, "_blank")}
                    className="text-text-muted hover:text-brand-primary transition transform hover:scale-110 cursor-pointer"
                    title="Source Code">
                    <FaCode size={22} />
                </span>
            </div>
        </footer>
    );
};

export default Footer;
