import React from "react";

const Dlc = () => {
  return (
    <section
      className="min-h-[85vh] bg-[#0f0f0f] text-white py-16 sm:py-20"
      id="dlc"
    >
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10">
          <div className="bg-purple-800 w-8 sm:w-10 h-1 rounded-full" />
          <h2 className="text-white text-2xl sm:text-4xl font-bold tracking-wide game-font">
            DLC
          </h2>
          <div className="bg-purple-800 w-8 sm:w-10 h-1 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="overflow-hidden rounded-lg transition-transform duration-300 ease-in-out lg:hover:scale-105">
            <img
              className="w-full h-full object-cover"
              src="https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/dlc1.webp"
              alt="DLC 1"
            />
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-lg transition-transform duration-300 ease-in-out lg:hover:scale-105">
            <img
              className="w-full h-full object-cover"
              src="https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/dlc2.webp"
              alt="DLC 2"
            />
          </div>

          {/* Card 3 */}
          <div className="overflow-hidden rounded-lg transition-transform duration-300 ease-in-out lg:hover:scale-105">
            <img
              className="w-full h-full object-cover"
              src="https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/dlc3.webp"
              alt="DLC 3"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Dlc;
