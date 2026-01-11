import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Features", id: "features" },
    { name: "Media", id: "media" },
    { name: "DLC", id: "dlc" },
    { name: "Purchase", id: "purchase" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div
      className={`
        fixed top-0 w-full z-50
        transition-all duration-300
        ${scrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="text-xl sm:text-3xl font-bold text-white game-font">
          LUNATICSASH
        </div>

        <ul className="hidden md:flex text-lg text-white gap-6 justify-end grow">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative cursor-pointer group game-font"
              onClick={() => handleScrollToSection(item.id)}
            >
              {item.name}
              <span
                className="
                  absolute left-0 -bottom-1
                  h-0.5 w-0
                  bg-purple-600
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 pb-6">
          <ul className="flex flex-col gap-4 text-white text-lg">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="cursor-pointer game-font hover:text-purple-400 transition"
                onClick={() => handleScrollToSection(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
