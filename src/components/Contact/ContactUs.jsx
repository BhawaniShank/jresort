import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [errors, setErrors] = useState({});
    
      // Handle input changes
      const handleChange = (e) => {
        const { id, value } = e.target;
        setData({ ...data, [id]: value });
        setErrors({ ...errors, [id]: "" }); // It clears error when typing
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const newErrors = {};
        if (!data.name) newErrors.name = "Name field is required";
        if (!data.email) newErrors.email = "Email field is required";
    
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
    
        alert("Form submitted successfully!");
        setData({ name: "", email: "", message: "" });
      };
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between items-center bg-[rgb(243,191,146)] p-8 md:p-16 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Contact Info */}

      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact</h2>
        <p className="text-lg text-gray-600 font-medium mb-6">With Us</p>
        <p className="text-gray-700 mb-2">
          Village Mundota, Mundota Road, Jaipur
        </p>
        <p className="text-gray-700 mb-2">+91 966 060 5555</p>
        <p className="text-gray-700 mb-2">info@mundotapalace.com</p>
        <p className="text-gray-700">palaceservices@mundotapalace.com</p>
      </div>

      {/* Contact Form */}

      <motion.div
        className="md:w-1/2 bg-white p-6 shadow-md rounded-lg"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Full Name"
              value={data.name}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={data.email}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
