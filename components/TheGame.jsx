import React from "react";

const TheGame = () => {
  const imageUrl =
    "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/about.webp";

  return (
    <section className="relative min-h-screen" id="about">
      <img
        src={imageUrl}
        alt="The Game"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-white px-4 sm:px-8 lg:px-16 py-16">
        <div
          className="
            max-w-4xl
            min-h-screen
            flex flex-col justify-center gap-5
            text-center lg:text-left
            mx-auto lg:mx-0
          "
        >
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl game-font">
            THE GAME
          </h1>

          <div className="bg-purple-900 h-0.5 w-32 sm:w-48 lg:w-[60%] rounded-2xl mx-auto lg:mx-0" />

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0">
            Step into the neon-lit chaos of Takatoro City — a sprawling metropolis
            where power shifts by the hour and danger hides in every shadow.
            Crime syndicates, corrupted authorities, and underground hackers
            fight for control while civilians struggle to survive the endless
            conflict. Every street tells a story, and every decision you make
            reshapes the fate of the city.
          </p>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0">
            As a mercenary with a mysterious past, you must navigate shifting
            alliances, master advanced combat systems, and uncover secrets that
            could change the future of the city forever.
          </p>

          <div className="game-font mt-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 font-semibold text-lg sm:text-xl">
              <li>
                <span className="text-purple-700">+</span> Immersive Story
              </li>
              <li>
                <span className="text-purple-700">+</span> Deep Characters
              </li>
              <li>
                <span className="text-purple-700">+</span> Expansive World
              </li>
              <li>
                <span className="text-purple-700">+</span> Engaging Combat
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheGame;
