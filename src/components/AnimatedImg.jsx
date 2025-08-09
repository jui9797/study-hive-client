const AnimatedImg = ({ imageSrc, alt }) => {
  return (
    <div className="relative w-40 h-40 group cursor-pointer">
      {/* New Background shape - Pink, more rounded */}
      <div
        className="absolute top-0 left-0 w-28 h-20 bg-pink-400
          rounded-3xl
          rotate-12
          transition-transform duration-600 delay-300
          group-hover:-translate-x-3 group-hover:-translate-y-3
          origin-center
          shadow-xl
          opacity-95
          filter drop-shadow-lg"
        style={{ clipPath: "ellipse(70% 50% at 50% 50%)" }}
      ></div>

      {/* Existing Background shapes - more visible */}
      <div
        className="absolute top-0 left-0 w-40 h-44 rounded-full
          bg-yellow-300
          translate-x-0 translate-y-0
          transition-transform duration-500
          group-hover:translate-x-4 group-hover:-translate-y-3
          origin-center
          shadow-xl
          opacity-95
          filter drop-shadow-lg"
        style={{ clipPath: "ellipse(60% 70% at 40% 30%)" }}
      ></div>

      <div
        className="absolute bottom-0 right-0 w-28 h-20 rounded-full
          bg-teal-400
          translate-x-0 translate-y-0
          transition-transform duration-700 delay-150
          group-hover:-translate-x-4 group-hover:translate-y-3
          origin-center
          shadow-xl
          opacity-95
          filter drop-shadow-lg"
        style={{ clipPath: "ellipse(70% 50% at 50% 50%)" }}
      ></div>

      {/* New additional shape 2: purple ellipse bottom-left */}
      <div
        className="absolute bottom-4 left-1 w-24 h-16 bg-purple-500
          rounded-full
          rotate-[-20deg]
          transition-transform duration-600 delay-400
          group-hover:-translate-x-2 group-hover:translate-y-2
          origin-center
          shadow-md
          opacity-95
          filter drop-shadow-md"
        style={{ clipPath: "ellipse(70% 50% at 50% 50%)" }}
      ></div>

      {/* Profile Image */}
      <img
        src={imageSrc}
        alt={alt}
        className="relative z-10 rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg"
      />
    </div>
  );
};

export default AnimatedImg;
