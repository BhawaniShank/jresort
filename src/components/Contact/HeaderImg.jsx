import React from "react";
import { motion } from "framer-motion";

const HeaderImg = () => {
  return (
    <div className="relative">
      {/* Header-Image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7pInC9C3_mrewLC7eN9byzPhSrqWnNvaGg&s/1920x400"
        alt="Contact Us Background"
        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
      />

      {/*Animation for text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-center px-4">
        <motion.h1
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-white text-sm sm:text-base md:text-lg mt-2 sm:mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We'd love to reach you !!!
        </motion.p>
      </div>
    </div>
  );
};

export default HeaderImg;
