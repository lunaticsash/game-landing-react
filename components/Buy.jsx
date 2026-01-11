import React, { useState } from "react";
import { FaFacebookF, FaDiscord } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const Buy = () => {
  const [showRequirements, setShowRequirements] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white py-20"
      id="purchase"
      style={{
        backgroundImage:
          "url('https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/about.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center items-center">
        <div className="one w-full">
          <div className="join relative flex flex-col lg:flex-row justify-center items-center gap-8 text-center lg:text-left">
            {/* Image */}
            <div className="img w-[220px] sm:w-[260px] lg:w-[300px] shadow-2xl">
              <img
                className="w-full h-auto object-cover"
                src="https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/game-box.webp"
                alt="Game Box"
              />
            </div>

            {/* Text */}
            <div className="buy flex flex-col justify-center items-center lg:items-start gap-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight tracking-wide">
                JOIN
                <br />
                THE
                <br />
                <span className="game-font">FIGHT</span>
              </h1>

              <div className="mt-4 space-y-4">
                <button className="bg-white text-black px-8 sm:px-10 py-3 font-semibold uppercase tracking-wide shadow-md hover:bg-gray-200 transition game-font">
                  BUY NOW ▼
                </button>
              </div>

              <p
                onClick={() => setShowRequirements(true)}
                className="text-gray-400 text-sm hover:text-white cursor-pointer transition"
              >
                System Requirements
              </p>
            </div>
          </div>

          {/* Platforms */}
          <div className="stores flex items-center justify-center mt-10">
            <img
              className="max-w-full h-auto"
              src="https://dev.atypicalthemes.com/Strider2-demo/pages/game-page-style-1/Animated/images/platforms.webp"
              alt="Platforms"
            />
          </div>
        </div>

        <div className="two flex flex-col justify-center items-center gap-4 mt-16 mb-10 px-4 max-w-lg text-center">
          <h3 className="text-2xl sm:text-3xl font-bold">NEWSLETTER</h3>

          <p className="text-base sm:text-lg">
            Join the newsletter to get the latest updates on the game.
          </p>

          <input
            type="email"
            placeholder="Type your email here"
            className="w-full px-4 py-3 mb-2 text-black border-l-4 border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white rounded-sm"
          />

          <label className="flex items-start gap-2 text-sm text-white text-left">
            <input
              type="checkbox"
              className="mt-1 accent-purple-600"
              required
            />
            <span>
              I agree to receive newsletters and accept the{" "}
              <span className="text-purple-500 cursor-pointer">
                Privacy Policy
              </span>
              .
            </span>
          </label>

          <p className="text-sm sm:text-base">
            You can unsubscribe at any time using the link in our emails.
          </p>

          <button className="px-4 py-2 text-base sm:text-lg font-semibold uppercase tracking-wider bg-white text-black rounded-sm shadow-xl hover:bg-purple-500 transition transform hover:scale-105">
            Subscribe
          </button>
        </div>

        <div className="logos flex flex-wrap items-center justify-center gap-4 sm:gap-5 mt-6">
          {[FaFacebookF, FaXTwitter, FaYoutube, FaDiscord].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white flex items-center justify-center cursor-pointer transition hover:bg-white"
              >
                <Icon className="text-white group-hover:text-purple-600 transition" />
              </a>
            )
          )}
        </div>
      </div>

      {showRequirements && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          {/* Card */}
          <div className="bg-zinc-900 text-white rounded-xl p-5 sm:p-8 w-full max-w-2xl relative shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowRequirements(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl transition"
            >
              ✕
            </button>

            <h2 className="text-xl sm:text-3xl font-bold mb-6 text-center">
              System Requirements
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-purple-400">
                  Minimum
                </h3>
                <ul className="space-y-1 text-gray-300">
                  <li>OS: Windows 10 (64-bit)</li>
                  <li>CPU: Intel i5 / Ryzen 5</li>
                  <li>RAM: 8 GB</li>
                  <li>GPU: GTX 1060 (6GB)</li>
                  <li>Storage: 50 GB SSD</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-400">
                  Recommended
                </h3>
                <ul className="space-y-1 text-gray-300">
                  <li>OS: Windows 11 (64-bit)</li>
                  <li>CPU: Intel i7 / Ryzen 7</li>
                  <li>RAM: 16 GB</li>
                  <li>GPU: RTX 3060</li>
                  <li>Storage: 50 GB NVMe SSD</li>
                </ul>
              </div>
            </div>

            {/* Logos */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 opacity-90">
              <img
                src="https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-blk-500x200-4c25-p@2x.png"
                className="h-12 sm:h-16 md:h-20 object-contain rounded-xl"
                alt="Nvidia"
              />
              <img
                src="/intel.png"
                className="h-12 sm:h-16 md:h-20 object-contain"
                alt="Intel"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Buy;
