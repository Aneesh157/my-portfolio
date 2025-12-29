import { motion } from "framer-motion";
import { services } from "../common/constants";

const Services = () => {
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
            </div>
        </section>
    );
};

export default Services;