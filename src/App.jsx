import HomeSection from "./Modules/Components/HomeSection";
import AboutUs from "./Modules/Components/AboutUs";
import Services from "./Modules/Components/Services";
import Contacts from "./Modules/Components/Contacts";
import Footer from "./Modules/common/Footer";
import { navItems } from "./Modules/common/constants";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function App() {
  const [active, setActive] = useState("home");

  const scrollToFooter = () => {
    document.getElementById("footer")?.scrollIntoView({
      behavior: "smooth",
    });
  };

   const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-[#fafafa] relative">

      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {navItems.map((item) => (
          <a key={item.link} href={`#${item.link}`} onClick={() => setActive(item.link)}
            className={`w-12 h-12 flex items-center justify-center rounded-full
              transition-all duration-300
              ${active === item.link ? "bg-gray-900 text-white shadow-lg scale-110" : "bg-white text-gray-600 hover:bg-gray-100" }
            `}
          >
            {item.icon}
          </a>
        ))}
      </nav>

      <main className="overflow-hidden">
        <section id="home" className="relative min-h-screen">
          <HomeSection />

          <button onClick={scrollToFooter} aria-label="Scroll to footer" className="absolute bottom-6 left-1/2 -translate-x-1/2
                       w-12 h-12 rounded-full
                       flex items-center justify-center
                       bg-white/70 backdrop-blur
                       shadow-lg
                       hover:scale-110 transition
                       animate-bounce"
          >
            <FiChevronDown size={26} className="text-gray-800" />
          </button>
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="contact">
          <Contacts />
        </section>
      </main>

      <footer id="footer">
        <Footer />

        <button onClick={scrollToHome} aria-label="Scroll to home" className="absolute bottom-6 left-1/2 -translate-x-1/2
                       w-12 h-12 rounded-full
                       flex items-center justify-center
                       bg-white/70 backdrop-blur
                       shadow-lg
                       hover:scale-110 transition
                       animate-bounce"
          >
            <FiChevronUp size={26} className="text-gray-800" />
          </button>
      </footer>
    </div>
  );
}

export default App;
