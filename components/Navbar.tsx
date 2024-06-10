"use client";
import { createElement, useState } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { navItems } from "../data";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-yellow-700/70 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiAdjustmentsHorizontal size={35} />
      </div>
      <nav
        className={`fixed  z-[999] flex items-center gap-5 bg-yellow-800/60 px-6 py-3 backdrop-blur-md rounded-full text-gray-200 duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={() => setActive(index)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
              active === index && "bg-yellow-500"
            }`}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
