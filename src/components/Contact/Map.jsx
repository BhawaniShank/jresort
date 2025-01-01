import React from "react";

const Map = () => {
  return (
    <div className="relative bg-gray-100">
      <div className="text-center py-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
          Find Us Here ...
        </h2>
        <p className="text-violet-600 mt-2">
          Mundota Palace on the map below.
        </p>
      </div>
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.388605890459!2d75.76122021504465!3d26.86124398314886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db54658d57c9d%3A0x9e7c2c14dc5e74af!2sMundota%20Palace!5e0!3m2!1sen!2sin!4v1678625331239!5m2!1sen!2sin"
          width="100%"
          height="50%"
          allowFullScreen=""
          className="border-0"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
