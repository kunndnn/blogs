import { FaGithub, FaLinkedin, FaRocket, FaCode } from "react-icons/fa6";
import { info } from "../data/info";

const Footer = () => {
    const year = new Date().getFullYear();

    const icons = [
        { icon: <FaGithub size={22} />, link: info?.socials?.github },
        { icon: <FaLinkedin size={22} />, link: info?.socials?.linkedin },
        { icon: <FaRocket size={22} />, link: info?.socials?.portfolio },
        { icon: <FaCode size={22} />, link: info?.socials?.code },
    ];

    return (
        <footer className="glass border-t border-white/5 flex flex-col md:flex-row items-center justify-between p-8 mt-24 gap-6 text-center md:text-left">
            {/* Left side text */}
            <span className="text-sm font-medium text-text-muted order-2 md:order-1">
                © {year} <span className="font-bold text-white">Blogs</span>. Made with <span className="text-brand-accent">❤️</span>
            </span>

            {/* Right side icons */}
            <div className="flex gap-4 items-center order-1 md:order-2">
                {icons?.map((icon, i) => (
                    <span
                        key={i}
                        onClick={() => window.open(icon?.link, "_blank")}
                        className="text-text-muted hover:text-brand-primary transition-all transform hover:scale-125 cursor-pointer p-2 bg-white/5 rounded-full border border-transparent hover:border-white/10"
                        title={icon?.title}>
                        {icon?.icon}
                    </span>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
