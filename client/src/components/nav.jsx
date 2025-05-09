import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative mb-20 top-0 h-[70px] w-full px-10 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      <a href="#">
        <img
          className="h-9"
          src="https://store-images.s-microsoft.com/image/apps.60371.4ade795d-2715-4b6f-b475-fba78b835f17.6dfa612f-d2d3-45fb-b3a4-34e1aa4fa810.47252780-ebdc-4cc4-8df3-89310788727e"
          alt="Logo"
        />
      </a>

      <ul className="md:flex hidden items-center gap-10">
        <li>
          <a className="hover:text-gray-500/80 transition" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition" href="#">
            Services
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition" href="#">
            More Tools
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition" href="#">
            Pricing
          </a>
        </li>
      </ul>
      <div className="flex flex-row gap-4 items-center justify-center">
        <button
          type="button"
          className=" text-white border bg-gray-700 border-gray-300 md:inline hidden text-sm active:scale-95 transition-all w-40 h-11 rounded-full"
        >
          Subscribe
        </button>
        <button
          type="button"
          className="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
        >
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        className="menu-btn inline-block md:hidden active:scale-90 transition"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#000"
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 md:hidden z-10">
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <a href="#" className="text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Pricing
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
          >
            Get started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
