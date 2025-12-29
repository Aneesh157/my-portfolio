import { motion } from "framer-motion";
import PROFILE from "../../assets/IMG_5361.jpg";

const HomeSection = () => {
  return (
    <section className="relative min-h-screen flex items-center px-8 bg-gradient-to-br from-[#e0e7ff] via-[#fbcfe8] to-[#ffedd5] text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Hey!{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a5b4fc] via-[#f9a8d4] to-[#fdba74]">
              I'm Aneesh.
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            As a passionate React.js developer, I thrive on crafting seamless user experiences and building dynamic web
            applications. With a strong foundation in front-end development and a knack for problem-solving, I am
            committed to writing high-quality, maintainable code and collaborating with cross-functional teams to
            deliver innovative, user-focused solutions.
          </p>

          <div className="flex gap-4">
            <motion.a href="#about" whileHover={{ scale: 1.05 }} className="px-6 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-[#a5b4fc] via-[#f9a8d4] to-[#fdba74] shadow-md" >
              Learn More
            </motion.a>

            <motion.a href="#contact" whileHover={{ scale: 1.05 }} className="px-6 py-3 rounded-md font-semibold border border-gray-300 hover:bg-white/70" >
              Contact Us
            </motion.a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative flex justify-center" >
          <div className="absolute w-80 h-80 rounded-full bg-[#f9a8d4]/30 blur-3xl"></div>
          <img src={PROFILE} alt="Profile" className="relative w-72 rounded-xl shadow-xl object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
