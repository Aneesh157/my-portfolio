import { motion } from "framer-motion";
import PROFILE from "../../assets/image.jpg";
import { skills } from "../common/constants";

const AboutUs = () => {

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <section className="bg-[#fafafa] py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >

        {/* ABOUT HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">ABOUT</h2>
          <div className="w-16 h-1 mx-auto mt-4
            bg-gradient-to-r from-[#a5b4fc] via-[#f9a8d4] to-[#fdba74]" />
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            An emerging web developer and tech enthusiast seeking opportunities
            to enhance technical expertise and build a strong career in a dynamic organization.
          </p>
        </div>

        {/* ABOUT CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* PROFILE IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl
                bg-gradient-to-br from-[#a5b4fc]/30 via-[#f9a8d4]/30 to-[#fdba74]/30
                blur-2xl" />
              <img
                src={PROFILE}
                alt="Profile"
                className="relative w-72 rounded-xl shadow-xl object-cover"
              />
            </div>
          </div>

          {/* DETAILS */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Web Designer & Web Developer
            </h3>
            <p className="italic text-gray-500 mb-6">
              Self-built • Quick Learner • Tech Enthusiast
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-gray-700">
              <p><strong>Birthday:</strong> 14 July 1999</p>
              <p><strong>Age:</strong> {calculateAge("1999-07-14")}</p>
              <p><strong>Degree:</strong> B.Tech ECE</p>
              <p><strong>Phone:</strong> +91 9048394157</p>
              <p><strong>Email:</strong> aneeshani773@gmail.com</p>
              <p><strong>City:</strong> Trivandrum, Kerala</p>
              <p><strong>Freelance:</strong> Available</p>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              I completed my Bachelor’s degree in Electronics & Communication Engineering in 2021.
              My academic journey strengthened my problem-solving and leadership skills.
              I am currently focused on building a professional career as a web developer.
            </p>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-14">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="py-6 px-4 text-center rounded-xl
        bg-white shadow-md border
        hover:shadow-lg transition"
              >
                <p className="font-semibold text-gray-800">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default AboutUs;
