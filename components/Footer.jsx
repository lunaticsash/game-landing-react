import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      <div
        className="
          max-w-7xl mx-auto px-4 sm:px-6 py-8
          flex flex-col md:flex-row
          items-center md:items-center
          justify-between gap-6
        "
      >
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            src="/brand2.webp"
            alt="Logo"
            className="h-16 sm:h-20 object-contain"
          />
        </div>

        <div className="text-center space-y-3">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center text-xs sm:text-sm">
            <a href="#" className="hover:text-purple-500 transition">
              Privacy & Cookie Policy
            </a>
            <a href="#" className="hover:text-purple-500 transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-purple-500 transition">
              Manage Cookies
            </a>
          </div>

          <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
            © Lunaticsash 2026 — Game Studio Template by{" "}
            <span className="text-purple-500 cursor-pointer">
              Atypicalthemes
            </span>
          </p>
        </div>

        <div className="flex-shrink-0 flex justify-center md:justify-end">
          <img
            src="/ESRB-M.svg"
            alt="ESRB Rating"
            className="w-32 sm:w-40 md:w-48 object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
