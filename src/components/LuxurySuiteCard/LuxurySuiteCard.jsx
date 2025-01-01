// import React from 'react';
import { motion } from 'framer-motion';

const LuxurySuiteCard = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-wrap mb-6"> 
        {/* Title */}
        <div className="w-full">
          <motion.p 
            className="text-2xl font-bold mb-4 flex items-center text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          > 
            <i className="fa fa-map-marker text-red-500 mr-2" aria-hidden="true"></i> 
            Nupe Old Dutch Market 
          </motion.p>
        </div>
        {/* Description */}
        <motion.div 
          className="w-full md:w-8/12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-base text-gray-700 leading-relaxed"> 
            The building at Nupe is an early Dutch building and a prominent landmark in Matara. It was
            constructed to be used as a market. At present, it is used as a training centre for artists
            engaged in performing arts and is administered by the Cultural Centre of the Ministry of
            Cultural Affairs and National Heritage. 
          </p>
        </motion.div>
        <div className="w-full md:w-4/12"> </div>
      </div>
      {/* Images */}
      <div className="flex flex-wrap -mx-2">
        <motion.div 
          className="w-full sm:w-3/12 px-2 mb-4" 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        > 
          <img 
            className="border border-gray-300 bg-white shadow-md p-1 w-full" 
            src="matara-dutch-market1.jpg" 
            title="Photo Credits - Korneev Evgeny" 
            alt="Nupe Old Dutch Market 1"
          />
        </motion.div>
        <motion.div 
          className="w-full sm:w-3/12 px-2 mb-4 hidden sm:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <img 
            className="border border-gray-300 bg-white shadow-md p-1 w-full mb-4" 
            src="matara-dutch-market6.jpg" 
            title="Photo Credits - www.chulie.wordpress.com" 
            alt="Nupe Old Dutch Market 6"
          /> 
          <img 
            className="border border-gray-300 bg-white shadow-md p-1 w-full" 
            src="matara-dutch-market5.jpg" 
            title="Photo Credits - www.sundayobserver.lk" 
            alt="Nupe Old Dutch Market 5"
          /> 
        </motion.div>
        <motion.div 
          className="w-full sm:w-3/12 px-2 mb-4 hidden sm:block" 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        > 
          <img 
            className="border border-gray-300 bg-white shadow-md p-1 w-full mb-4" 
            src="matara-dutch-market4.jpg" 
            title="Photo Credits - Juno Yoon" 
            alt="Nupe Old Dutch Market 4"
          /> 
          <img 
            className="border border-gray-300 bg-white shadow-md p-1 w-full" 
            src="matara-dutch-market3.jpg" 
            title="Photo Credits - Sucharith Maduranga" 
            alt="Nupe Old Dutch Market 3"
          />
        </motion.div>
        <motion.div 
          className="w-full sm:w-3/12 px-2 mb-4 hidden sm:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        > 
          <img 
            className="border border-gray-300 bg-white shadow-md p-1 w-full" 
            src="matara-dutch-market1.jpg" 
            title="Photo Credits - Korneev Evgeny" 
            alt="Nupe Old Dutch Market 2"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LuxurySuiteCard;
