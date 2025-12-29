import { socialLinks } from "./constants";

const Footer = () => {
    return (
        <footer className="bg-white py-16">
            <div className="max-w-4xl mx-auto text-center px-6">

                <h2 className="text-3xl font-bold text-gray-800"> Aneesh A </h2>

                <p className="mt-2 text-gray-500 text-sm"> Web Designer, Web Developer, Tech Enthusiast. </p>

                <div className="mt-6 flex justify-center gap-4">
                    {socialLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={item.label}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white
                         hover:bg-gray-800 transition duration-300"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>

                <p className="mt-6 text-xs text-gray-400">
                    © {new Date().getFullYear()} Aneesh A. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
