import PropTypes from "prop-types";

const HorizontalScroll = ({ logos }) => {
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-5 animate-scroll"
        style={{ animation: "scroll 15s linear infinite" }}
      >
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-24 object-contain"
          />
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

HorizontalScroll.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HorizontalScroll;