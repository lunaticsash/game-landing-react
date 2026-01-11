import React from "react";

import { useState } from "react";

const faqs = [
  {
    q: "What is Ghost Modem about?",
    a: `Ghost Modem is an action adventure RPG.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta sollicitudin dignissim. Sed euismod faucibus consequat. Nam egestas et metus ut suscipit. Phasellus sit amet tellus feugiat, dignissim sapien vel, imperdiet augue. Morbi eget ultrices diam.`,
  },
  {
    q: "When will Ghost Modem be available?",
    a: `We expect to release in late 2025. Join the newsletter for updates.`,
  },
  {
    q: "What platforms will Ghost Modem be on?",
    a: `PC, major consoles and streaming platforms. More details coming soon.`,
  },
  {
    q: "What are the system requirements for Ghost Modem?",
    a: `Minimum: 8GB RAM, GTX 1060 or equivalent. Recommended: 16GB RAM, RTX 2060+.`,
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="min-h-[85vh] bg-[#0f0f0f] text-white py-20" >
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="bg-purple-600 w-10 h-1 rounded-full" />
          <h2 className="text-white text-4xl font-bold tracking-wide game-font">FAQ</h2>
          <div className="bg-purple-600 w-10 h-1 rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="w-full">
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className={`w-full flex items-center justify-between px-6 py-4 text-left ${
                    isOpen ? "bg-white/5" : "bg-purple-600"
                  } rounded-sm transition-colors duration-200 focus:outline-none`}
                >
                  <span className="text-white text-lg md:text-xl">{f.q}</span>

                  <svg
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-[cubic-bezier(.2,.8,.2,1)] ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 py-6 bg-[#1f1f1f] border border-black text-gray-200">
                    <p className="font-semibold mb-3">{f.a.split("\n\n")[0]}</p>
                    <p className="leading-relaxed whitespace-pre-line text-sm">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
