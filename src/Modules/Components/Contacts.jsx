import { motion } from "framer-motion";
import { buttonStyle, contactInfo } from "../common/constants";
import { useState } from "react";

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:5000/message/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", mobile: "", email: "", message: "" });
            } else {
                alert(data.message || "Failed to send message.");
            }
        } catch (error) {
            console.error("Error submitting message:", error);
            alert("Something went wrong!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative py-24 px-6 bg-gradient-to-br
            from-[#e0e7ff] via-[#fbcfe8] to-[#ffedd5] overflow-hidden"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">

                <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Let’s Connect & Build <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a5b4fc] via-[#f9a8d4] to-[#fdba74]">
                            Something Great
                        </span>
                    </h2>

                    <p className="text-gray-600 text-lg mb-10 max-w-lg">
                        Have a question, project idea, or collaboration in mind?
                        Feel free to reach out.
                    </p>

                    <div className="flex flex-col gap-4">
                        {contactInfo.map((info, index) => (
                            <motion.div key={index} whileHover={{ scale: 1.03 }} className="flex items-center gap-4 bg-white/70 p-4 rounded-xl border border-gray-200 shadow-sm" >
                                <div className="text-xl text-[#a5b4fc]">
                                    {info.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800"> {info.title} </h4>
                                    <p className="text-sm text-gray-600"> {info.value} </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex justify-center" >
                    <div className="w-full max-w-md bg-white/80 p-8 rounded-2xl border border-gray-200 shadow-lg" >
                        <h3 className="text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#a5b4fc] via-[#f9a8d4] to-[#fdba74]" >
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#a5b4fc]" />
                                {errors.name && (
                                    <p className="text-sm text-red-500 mt-1"> {errors.name} </p>
                                )}
                            </div>

                            <div>
                                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#fdba74]" />
                                {errors.email && (
                                    <p className="text-sm text-red-500 mt-1"> {errors.email} </p>
                                )}
                            </div>

                            <div>
                                <textarea rows={4} name="message" placeholder="Your Message..." value={formData.message} onChange={handleChange} className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#a5b4fc]" />
                                {errors.message && (
                                    <p className="text-sm text-red-500 mt-1"> {errors.message} </p>
                                )}
                            </div>

                            <button type="submit" disabled={isSubmitting} className={`${buttonStyle} ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`} >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>

                        </form>
                    </div>
                </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-tl
              from-[#a5b4fc]/30 via-[#f9a8d4]/20 to-[#fdba74]/30 blur-3xl opacity-50"
            />
        </section>
    );
};

export default Contacts;
