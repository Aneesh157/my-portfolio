import { Link } from 'react-router-dom';
import { navItems } from './constants';

const MobileMenu = ({ setIsMenuOpen, location }) => {
    return (
        <div className="absolute top-full left-0 w-full bg-[#1a181b]/95 backdrop-blur-xl 
          border-t border-white/20 flex flex-col items-center gap-6 py-8 z-10 animate-fade-in">
            {navItems.map((item, index) => {
                const isActive = location.pathname === item.link;
                return (
                    <Link
                        key={index}
                        to={item.link}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-lg ${isActive ? "text-[#fcb979] font-semibold" : "text-white/90"
                            } hover:text-white transition-all duration-300`}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </div>
    );
};

export default MobileMenu;
