import { AnimatePresence, motion } from "framer-motion";
import { services, testimonials } from "../common/constants";
import { useEffect, useState } from "react";

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold tracking-wider" >
                    SERVICES
                </motion.h2>

                <div className="w-12 h-[2px] bg-gray-800 mx-auto mt-3 mb-6" />

                <p className="text-gray-500 max-w-2xl mx-auto mb-14">
                    The services I provide are not a burden for me, just because I do them
                    with a passion.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} whileHover={{ y: -10 }} className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10" >
                            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gray-100">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-semibold mb-3"> {service.title} </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800">TESTIMONIALS</h2>
                        <div className="w-12 h-[2px] bg-black mx-auto mt-4" />
                    </div>

                    <div className="max-w-4xl mx-auto text-center relative">
                        <AnimatePresence mode="wait">
                            <motion.div key={activeIndex} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.6 }} >
                                <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="w-24 h-24 rounded-full mx-auto object-cover shadow-md" />

                                <h4 className="mt-6 font-semibold text-lg text-gray-800">
                                    {testimonials[activeIndex].name}
                                </h4>
                                <p className="text-gray-500 text-sm">
                                    {testimonials[activeIndex].role}
                                </p>

                                <p className="mt-8 text-gray-600 italic leading-relaxed max-w-3xl mx-auto relative">
                                    <span className="text-4xl text-gray-400 absolute -left-6 -top-4">“</span>
                                    {testimonials[activeIndex].message}
                                    <span className="text-4xl text-gray-400 absolute -right-6 -bottom-4">”</span>
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-center gap-3 mt-12">
                            {testimonials.map((_, index) => (
                                <button key={index} onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full border transition ${index === activeIndex ? "bg-black" : "border-black"}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;