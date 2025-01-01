import React from "react";

const FooterImg = () => {
  return (
    <div className="relative">
      {/* Footer-Image */}
      <img
       src="https://i.pinimg.com/originals/98/a4/59/98a4594dd9641b5804ccd7c5542becde.jpg"
        alt="Footer Background"
        className="w-full h-auto object-contain"
      />
    
      <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
        <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
          Great elegance at Mundota Palace
        </p>
      </div>
    </div>
  );
};

export default FooterImg;
