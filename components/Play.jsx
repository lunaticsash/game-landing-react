import React, { useEffect, useState, useMemo } from "react";

const SLIDES = [
  {
    title: "GHOST MODEM",
    description:
      "Welcome to Takatoro city, where crime lurks behind every corner and allegiances change by the second.",
    imageUrl:
      "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/hero.webp",
  },
  {
    title: "INTO THE SHADOWS",
    description:
      "Darkness spreads through the city, and you must decide who to trust before it's too late.",
    imageUrl:
      "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/hero3.webp",
  },
  {
    title: "CHOOSE YOUR FATE",
    description:
      "Every choice pushes you closer to freedom... or destruction. Will you survive Takatoro?",
    imageUrl:
      "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/hero2.webp",
  },
];

const Play = ({ onPlayClick }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const currentSlide = SLIDES[currentSlideIndex];

  const backgroundStyle = useMemo(
    () => ({
      backgroundImage: `url('${currentSlide.imageUrl}')`,
    }),
    [currentSlide.imageUrl]
  );

  useEffect(() => {
    const fadeOutDuration = 500;
    const displayDuration = 4500;

    const fadeTimer = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % SLIDES.length);
        setIsFading(false);
      }, fadeOutDuration);
    }, displayDuration);

    return () => clearInterval(fadeTimer);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden font-sans"
      id="home"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={backgroundStyle}
        key={currentSlideIndex}
      >
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />
      </div>

      {/* Content */}
      <div
        className={`relative flex flex-col justify-center items-center text-white text-center min-h-screen z-10 
        px-4 sm:px-6 transition-opacity duration-500 ease-in-out ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight drop-shadow-lg max-w-xl uppercase game-font">
          {currentSlide.title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-xl font-light leading-relaxed drop-shadow-md">
          {currentSlide.description}
        </p>

        <button
          onClick={onPlayClick}
          className="px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg md:text-xl font-semibold uppercase tracking-wider bg-white text-black rounded-sm shadow-xl hover:cursor-pointer 
          hover:bg-purple-500 transition duration-300 transform hover:scale-105 game-font"
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Play;
