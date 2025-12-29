import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { navItems } from "./constants";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full
      bg-gradient-to-r from-[#e0e7ff] via-[#fbcfe8] to-[#ffedd5]
      shadow-md px-6 py-3 flex items-center justify-between">

      <h1 className="font-bold text-xl bg-clip-text text-transparent
        bg-gradient-to-r from-[#a5b4fc] via-[#f9a8d4] to-[#fdba74]">
        Software Engineer
      </h1>

      <div className="hidden md:flex gap-8">
        {navItems.map((item) => {
          return (
            <a href={`#${item.link}`} className="text-gray-700 hover:text-gray-900 transition" >
              {item.icon}
            </a>
          );
        })}
      </div>

      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {isMenuOpen && (
        <MobileMenu setIsMenuOpen={setIsMenuOpen} location={location} />
      )}
    </nav>
  );
}

export default Navbar;
