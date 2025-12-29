import HomeSection from "./Modules/Components/HomeSection";
import AboutUs from "./Modules/Components/AboutUs";
import Services from "./Modules/Components/Services";
import Contacts from "./Modules/Components/Contacts";
import Footer from "./Modules/common/Footer";
import { navItems } from "./Modules/common/constants";
import { useState } from "react";

function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="w-full bg-[#fafafa] relative">

      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {navItems.map((item) => (
          <a
            key={item.link}
            href={`#${item.link}`}
            onClick={() => setActive(item.link)}
            className={`w-12 h-12 flex items-center justify-center rounded-full
              transition-all duration-300
              ${active === item.link
                ? "bg-gray-900 text-white shadow-lg scale-110"
                : "bg-white text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            {item.icon}
          </a>
        ))}
      </nav>

      <main className="overflow-hidden">
        <section id="home">
          <HomeSection />
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

      <Footer />
    </div>
  );
}

export default App;
