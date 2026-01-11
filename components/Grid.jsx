import React from "react";

const tiles = [
  {
    id: 1,
    title: "EXPLORE",
    text:
      "Discover hidden districts, secret tunnels, and neon-lit streets filled with danger and opportunity. Every location hides a story waiting to be uncovered.",
    img: "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/feature1.webp",
    align: "left",
  },
  {
    id: 2,
    title: "UPGRADE",
    text:
      "Enhance your weapons, unlock cyber abilities, and customize your loadout to dominate every encounter in the city.",
    img: "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/feature2.webp",
    align: "left",
  },
  {
    id: 3,
    title: "MAKE\nFRIENDS",
    text:
      "Build alliances with underground factions, hackers, and mercenaries. Your relationships shape your future.",
    img: "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/feature3.webp",
    align: "left",
  },
  {
    id: 4,
    title: "UNCOVER\nDARK\nSECRETS",
    text:
      "Investigate powerful corporations, corrupted leaders, and forgotten experiments that threaten the balance of the city.",
    img: "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/feature4.webp",
    align: "left",
  },
];

const Grid = () => {
  return (
    <section className="min-h-screen bg-gray-900" id="features">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {tiles.map((t) => (
          <article
            key={t.id}
            className="
              relative group overflow-hidden 
              h-[45vh] sm:h-[55vh] md:h-[65vh]
              flex items-center justify-center md:justify-start
            "
            aria-label={t.title}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-[1200ms] ease-out lg:group-hover:scale-110"
              style={{ backgroundImage: `url(${t.img})` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/65 pointer-events-none" />

            <div className="hidden md:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/70 to-transparent pointer-events-none" />

            {/* Content */}
            <div
              className="
                relative z-10 
                p-5 sm:p-8 md:p-14 
                max-w-xl 
                text-center md:text-left
              "
            >
              <h2 className="whitespace-pre-line text-white font-extrabold tracking-tight text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight game-font">
                {t.title}
              </h2>

              <p className="mt-4 sm:mt-6 text-gray-200 text-sm sm:text-base max-w-lg mx-auto md:mx-0">
                {t.text}
              </p>

              <div className="mt-6 sm:mt-8 flex justify-center md:justify-start">
                <a
                  href="#"
                  className="
                    inline-flex items-center 
                    px-4 sm:px-5 py-2.5 sm:py-3 
                    border border-white/60 rounded 
                    transition-all text-white 
                    text-xs sm:text-sm md:text-base 
                    hover:bg-white/10
                  "
                >
                  VIEW FEATURE
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Grid;
