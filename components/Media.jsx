import React from "react";

const pics = [
  { id: 1, img: "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/game-1-cover.webp" },
  { id: 2, img: "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/game-2-large.webp" },
  { id: 3, img: "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/game-1-cover.webp" },
  { id: 4, img: "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/game-2-large.webp" },
  { id: 5, img: "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/game-1-cover.webp" },
  { id: 6, img: "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/game-2-large.webp" },
  { id: 7, img: "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/game-1-cover.webp" },
  { id: 8, img: "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/game-2-large.webp" },
  { id: 9, img: "https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/game-1-cover.webp" }
];

const Media = () => {
  return (
    <section
      className="min-h-screen bg-[#0f0f0f] py-20 sm:py-28"
      id="media"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10">
          <div className="bg-purple-800 rounded-full w-8 sm:w-10 h-1" />
          <h2 className="text-white text-2xl sm:text-4xl font-bold tracking-wide game-font">
            MEDIA
          </h2>
          <div className="bg-purple-800 rounded-full w-8 sm:w-10 h-1" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {pics.map((p) => (
            <div
              key={p.id}
              className="relative group overflow-hidden rounded-md aspect-video bg-black"
              aria-label={`media-${p.id}`}
            >
              <img
                src={p.img}
                alt="Media preview"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out lg:group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 lg:group-hover:bg-black/40 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
