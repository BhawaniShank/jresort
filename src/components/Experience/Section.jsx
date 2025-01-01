import { motion } from "framer-motion";

const Section = ({ title, description, image, reverse = false }) => {
  const animationVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0 }, 
  };

  return (
    <motion.div
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center min-h-screen p-10`}
      variants={animationVariants}
      initial="hidden" 
      whileInView="visible" 
      transition={{ duration: 0.8, ease: "easeOut" }} 
      viewport={{ amount: 0.3 }} 
    >
      <motion.div
        className={`mb-10 md:mb-0 ${reverse ? 'md:ml-10' : 'md:mr-10'} relative`}
        variants={animationVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ amount: 0.3 }}
      >
        <img
          src={image}
          alt={title}
          className="block transform transition-transform duration-500 hover:scale-110 animate-zoom" 
        />
        <div className={`absolute top-5 ${reverse ? 'right-5' : 'left-5'} w-full h-full bg-gray-300 -z-10`}></div>
      </motion.div>
      <motion.div
        className="max-w-lg"
        variants={animationVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ amount: 0.3 }}
      >
        <h1 className="text-4xl font-semibold mb-5">{title}</h1>
        <p className="text-lg leading-8 text-gray-700 mb-5">{description}</p>
        <button className="border-2 border-gray-700 py-2 px-4 font-semibold text-gray-700 hover:bg-gray-700 hover:text-white transition-transform transform hover:scale-105">
          Contact Us
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Section;
