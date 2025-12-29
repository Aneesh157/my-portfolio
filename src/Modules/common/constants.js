import { Contact2Icon, Facebook, GraduationCapIcon, Home, Instagram, Linkedin, Mail, MapPin, Phone, User } from "lucide-react";
import { FaHtml5, FaNodeJs, FaMobileAlt } from "react-icons/fa";

export const inputStyle = "bg-transparent border border-cyan-500/50 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition";

export const buttonStyle = "mt-2 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-[#a5b4fc] via-[#f9a8d4] to-[#fdba74] hover:scale-105 transition-all duration-300";

export const navItems = [
  { icon: <Home size={22} />, label: "Home", link: "home" },
  { icon: <User size={22} />, label: "About Us", link: "about" },
  { icon: <GraduationCapIcon size={22} />, label: "Services", link: "services" },
  { icon: <Contact2Icon size={22} />, label: "Contact", link: "contact" },
];

export const images = [
  "https://images.unsplash.com/photo-1506765515384-028b60a970df",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
];

export const contactInfo = [
  { icon: <Mail size={22} />, title: "Email", value: "aneeshani773@gmail.com", },
  { icon: <Phone size={22} />, title: "Phone", value: "+91 90483 94157", },
  { icon: <MapPin size={22} />, title: "Address", value: "Thiruvananthapuram, India", }
];

export const socialLinks = [
  {
    icon: <Facebook size={20} />,
    link: "www.facebook.com/aneesh.annalath",
    label: "Facebook",
  },
  {
    icon: <Instagram size={20} />,
    link: "https://www.instagram.com/anee._sh__?igsh=cThlZ2swend0NmRz&utm_source=qr",
    label: "Instagram",
  },
  {
    icon: <Linkedin size={20} />,
    link: "https://www.linkedin.com/in/aneesh-annalath",
    label: "LinkedIn",
  }
];

export const services = [
  {
    title: "Web design",
    description:
      "Plan, create and code web pages, that fit customers' requirements.",
    icon: <FaHtml5 className="text-orange-500 text-2xl" />,
  },
  {
    title: "Web development",
    description:
      "Self-built web developer who develop and maintain wonders on webpages.",
    icon: <FaNodeJs className="text-green-600 text-2xl" />,
  },
  {
    title: "App development",
    description:
      "Designs and develops aesthetic and optimized mobile applications.",
    icon: <FaMobileAlt className="text-green-500 text-2xl" />,
  },
];

export const skills = [
  { name: "React JS", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "JavaScript", level: 75 },
  { name: "Git", level: 70 },
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Bootstrap", level: 80 },
  { name: "Redux", level: 80 },
  { name: "Mongo DB", level: 70 },
  { name: "Express JS", level: 75 },
  { name: "Node JS", level: 75 }
];